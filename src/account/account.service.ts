import {
  Account,
  AccountUpdateInput,
  AccountWhereUniqueInput,
  CreateOneAccountArgs,
  FindUniqueAccountArgs,
} from '@graphql'

import { HttpStatus, Injectable } from '@nestjs/common'
import { Permission, Upload } from '@prisma/client'

// Сервисы
import { UploadService } from '@/upload/upload.service'

// Репозитории
import { AccountRepository } from './account.repository'

// Утилиты
import { toS3Path } from '@utils/funcs'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'
import { File } from '@interfaces/upload'

// Enums
import { STORAGE } from '@enums/storage'

// DTO
import { GetAccountsDto } from './dto/get-accounts.dto'

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

  /**
   * Получение уникального аккаунта
   * @param {AccountWhereUniqueInput} where Поля отбора
   * @returns {Account | APIError} Аккаунт
   */
  async getAccount(
    where: AccountWhereUniqueInput,
  ): Promise<Account | APIError> {
    const account = await this.account.model.findMany({
      where: where as Required<AccountWhereUniqueInput>,
      take: 1,
      include: {
        _count: true,
        avatar: true,
        actors: true,
        chats: true,
        messages: true,
        owned_chats: true,
        owned_comments: true,
        owned_memories: true,
        owned_messages: true,
        uploaded_files: true,
      },
    })

    if (account.length === 0)
      return new APIError(HttpStatus.NOT_FOUND, 'Аккаунт не найден')

    return account[0]
  }

  /**
   * Получение списка аккаунтов
   * @param {GetAccountsDto} dto Параметры поиска
   * @returns {Account[]} Список аккаунтов
   */
  async getAccounts({
    page,
    size,
    filter,
  }: GetAccountsDto): Promise<Account[]> {
    return await this.account.model.findMany({
      where: filter,
      take: size,
      skip: size * (page - 1),
      orderBy: { created_at: 'desc' },
      include: {
        avatar: true,
        chats: true,
        uploaded_files: true,
        messages: true,
        owned_chats: true,
        owned_comments: true,
        owned_memories: true,
        owned_messages: true,
        actors: true,
        _count: true,
      },
    })
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
   * @param {AccountUpdateInput} data Данные для изменения
   * @param {AccountWhereUniqueInput} where Поля отбора
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Account | APIError} Изменённый аккаунт
   */
  async updateAccount(
    data: AccountUpdateInput,
    where: AccountWhereUniqueInput,
    user?: AuthenticatedUser,
  ): Promise<Account | APIError> {
    if (user && !user.roles.includes('Administrator')) {
      if (where.id && where.id !== user.id) {
        return new APIError(HttpStatus.FORBIDDEN)
      }

      if (where.username && where.username !== user.username) {
        return new APIError(HttpStatus.FORBIDDEN)
      }
    }

    try {
      return await this.account.update({
        data,
        where: where as Required<AccountWhereUniqueInput>,
      })
    } catch (e) {
      return new APIError(HttpStatus.INTERNAL_SERVER_ERROR, e.message)
    }
  }

  /**
   * Удаление аккаунта
   * @param {AccountWhereUniqueInput} where Поля отбора аккаунта
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Account | APIError} Удалённый аккаунт
   */
  async deleteAccount(
    where: AccountWhereUniqueInput,
    user: AuthenticatedUser,
  ): Promise<Account | APIError> {
    if (!user.roles.includes('Administrator')) {
      if (where.id && where.id !== user.id) {
        return new APIError(HttpStatus.FORBIDDEN)
      }
    }

    try {
      return await this.account.model.delete({
        where: where as Required<AccountWhereUniqueInput>,
      })
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
