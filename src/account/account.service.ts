import { HttpStatus, Injectable } from '@nestjs/common'
import { Permission, Upload } from '@prisma/client'
import { Account, CreateOneAccountArgs } from '@graphql'

// Сервисы
import { UploadService } from '@/upload/upload.service'

// Репозитории
import { AccountRepository } from './account.repository'

// Утилиты
import { toS3Path } from '@utils/funcs'

// Интерфейсы
import { AccountFindUniqueDto, AccountUpdateDto } from '@interfaces/account'
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'
import { File } from '@interfaces/upload'

// Перечисления
import { STORAGE } from '@enums/storage'

/**
 * Сервис аккаунта
 */
@Injectable()
export class AccountService {
  /**
   * Конструктор сервиса аккаунта
   * @param {AccountRepository} account Репозиторий аккаунта
   * @param {UploadService} upload Сервис загрузок
   */
  constructor(
    private readonly account: AccountRepository,
    private readonly upload: UploadService,
  ) {}

  async getOne(dto: AccountFindUniqueDto): Promise<Account | APIError> {
    const account = await this.account.findOne(dto)

    if (!account) return new APIError(HttpStatus.NOT_FOUND, 'Аккаунт не найден')

    return account
  }

  /**
   * Получение аккаунта по ID
   * @param {String} id ID аккаунта
   * @returns {Account} Аккаунт в базе данных
   */
  async getById(id: string): Promise<Account | APIError> {
    const account = await this.account.findOne({
      where: {
        id,
      },
      include: {
        avatar: true,
      },
    })

    if (!account) return new APIError(HttpStatus.NOT_FOUND, 'Аккаунт не найден')

    return account
  }

  /**
   * Получение аккаунта по имени пользователя
   * @param {String} username Имя аккаунта
   * @returns {Account} Аккаунт в базе данных
   */
  async getByUsername(username: string): Promise<Account | APIError> {
    const account = await this.account.findOne({
      where: {
        username,
      },
      include: {
        avatar: true,
      },
    })

    if (!account) return new APIError(HttpStatus.NOT_FOUND, 'Аккаунт не найден')

    return account
  }

  /**
   * Создание аккаунта
   * @param {CreateOneAccountArgs} dto Данные нового аккаунта
   * @returns {Account} Созданный аккаунт
   */
  async create(dto: CreateOneAccountArgs): Promise<Account | APIError> {
    try {
      return await this.account.create(dto)
    } catch (e) {
      return new APIError(HttpStatus.BAD_REQUEST, e.message)
    }
  }

  /**
   * Изменение аккаунта
   * @param {AccountUpdateDto} dto
   * @returns {Account} Изменённый аккаунт
   */
  async update(dto: AccountUpdateDto): Promise<Account | APIError> {
    try {
      return await this.account.update(dto)
    } catch (e) {
      return new APIError(HttpStatus.INTERNAL_SERVER_ERROR, e.message)
    }
  }

  /**
   * Загрузка аватара аккаунта
   * @param {File} file Изображение для аватара
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @param {string} targetId ID аккаунта для загрузки (опционально)
   * @returns {Upload} Загруженный аватар
   */
  async uploadAvatar(
    file: File,
    user: AuthenticatedUser,
    targetId?: string,
  ): Promise<Upload | APIError> {
    if (targetId) {
      const targetAccount = await this.accountIsExists(targetId)

      if (targetAccount instanceof APIError) {
        return targetAccount
      }

      // Если аватар уже существует
      if (targetAccount && targetAccount.avatar) {
        return new APIError(HttpStatus.CONFLICT, 'Аватар уже существует')
      }
    } else if (user.avatar) {
      return new APIError(HttpStatus.CONFLICT, 'Аватар уже существует')
    }

    let uploadedFile = await this.upload.putFile({
      file,
      owner: user.username,
      path: toS3Path(STORAGE.AVATARS),
      compress: true,
      acl: Permission.Public,
    })

    if (uploadedFile instanceof APIError) {
      return uploadedFile
    }

    try {
      await this.account.update({
        data: {
          avatar: {
            connect: {
              id: uploadedFile!.id,
            },
          },
        },
        where: {
          id: targetId || user.id,
        },
      })
    } catch (e) {
      // Компенсирующая транзакция на удаление аватара из хранилища, если он не обновился в аккаунте
      await this.upload.deleteFile(uploadedFile!.id)

      return new APIError(HttpStatus.INTERNAL_SERVER_ERROR, e.message)
    }

    return uploadedFile
  }

  /**
   * Удаление аватара аккаунта
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @param {string} targetId Идентификатор аккаунта (опционально)
   * @returns {Upload} Удалённый файл
   */
  async removeAvatar(
    user: AuthenticatedUser,
    targetId?: string,
  ): Promise<Upload | APIError> {
    let targetAvatar: Upload | null = user.avatar || null

    if (targetId) {
      const targetAccount = await this.accountIsExists(targetId)

      if (targetAccount instanceof APIError) {
        return targetAccount
      }

      if (targetAccount.avatar) {
        targetAvatar = targetAccount.avatar
      }
    }

    if (!targetAvatar) {
      return new APIError(HttpStatus.BAD_REQUEST, 'Аватар не найден')
    }

    return await this.upload.deleteFile(targetAvatar.id)
  }

  /**
   * Проверка на существование аккаунта
   * @param {string} id Идентификатор аккаунта
   * @returns {Account} Аккаунт в базе данных
   */
  async accountIsExists(id: string): Promise<Account | APIError> {
    const account = await this.account.findOne({
      where: {
        id,
      },
      include: {
        avatar: true,
      },
    })

    // Если целевой аккаунт не найден
    if (!account) {
      return new APIError(HttpStatus.NOT_FOUND, 'Аккаунт не найден')
    }

    return account
  }
}
