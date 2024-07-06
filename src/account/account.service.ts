import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'

import { Permission, Upload } from '@prisma/client'
import { Account } from '@graphql'

import { UploadService } from '@/upload/upload.service'
import { AccountRepository } from './account.repository'

import { toS3Path } from '@utils/funcs'

import { AuthenticatedUser } from '@interfaces/user'
import { File } from '@interfaces/upload'

import { STORAGE } from '@enums/storage'

/**
 * Сервис аккаунта
 */
@Injectable()
export class AccountService {
  /**
   * Конструктор сервиса аккаунта
   * @param {AccountRepository} account Репозиторий аккаунта
   */
  constructor(
    private readonly account: AccountRepository,
    private readonly upload: UploadService,
  ) {}

  /**
   * Получение аккаунта по ID
   * @param {String} id ID аккаунта
   * @returns {Account | null} Аккаунт в базе данных
   */
  async findOne(id: string): Promise<Account | null> {
    return await this.account.findOne({ where: { id } })
  }

  /**
   * Получение аккаунта по имени пользователя
   * @param {String} username Имя аккаунта
   * @returns {Account | null} Аккаунт в базе данных
   */
  async findByUsername(username: string): Promise<Account | null> {
    return await this.account.findOne({
      where: { username },
      include: {
        avatar: true,
      },
    })
  }

  /**
   * Загрузка аватара аккаунта
   * @param {File} file Изображение для аватара
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @param {string} targetId ID аккаунта для загрузки (опционально)
   * @returns {Upload | null} Загруженный аватар
   */
  async uploadAvatar(
    file: File,
    user: AuthenticatedUser,
    targetId?: string,
  ): Promise<Upload | null> {
    if (targetId) {
      const targetAccount = await this.accountIsExists(targetId)

      // Если аватар уже существует
      if (targetAccount && targetAccount.avatar) {
        throw new ConflictException('Avatar is exists')
      }
    } else if (user.avatar) {
      throw new ConflictException('Avatar is exists')
    }

    let uploadedFile: Upload | null = null

    try {
      // Загрузка файла в хранилище
      uploadedFile = await this.upload.putFile({
        file,
        owner: user.username,
        path: toS3Path(STORAGE.AVATARS),
        compress: true,
        acl: Permission.Public,
      })
    } catch (e) {
      throw new InternalServerErrorException(e.message)
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

      throw new InternalServerErrorException(e.message)
    }

    return uploadedFile
  }

  /**
   * Удаление аватара аккаунта
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @param {string} targetId Идентификатор аккаунта (опционально)
   * @returns {Upload | null} Удалённый файл
   */
  async removeAvatar(
    user: AuthenticatedUser,
    targetId?: string,
  ): Promise<Upload | null> {
    let targetAvatar: Upload | null = user.avatar || null

    if (targetId) {
      const { avatar } = await this.accountIsExists(targetId)

      if (avatar) {
        targetAvatar = avatar
      }
    }

    if (!targetAvatar) {
      throw new BadRequestException('Avatar not found')
    }

    return await this.upload.deleteFile(targetAvatar.id)
  }

  /**
   * Проверка на существование аккаунта
   * @param {string} id Идентификатор аккаунта
   * @returns {Account} Аккаунт в базе данных
   */
  private async accountIsExists(id: string): Promise<Account> {
    const account = await this.account.findOne({
      where: {
        id,
      },
      select: {
        avatar: true,
      },
    })

    // Если целевой аккаунт не найден
    if (!account) {
      throw new NotFoundException('Account not found')
    }

    return account
  }
}
