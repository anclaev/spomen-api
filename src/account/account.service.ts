import {
  ConflictException,
  ForbiddenException,
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
   * Получение аккаунта по имени пользоватедя
   * @param {String} username Имя аккаунта
   * @returns {Account | null} Аккаунт в базе данных
   */
  async findByUsername(username: string): Promise<Account | null> {
    return await this.account.findOne({ where: { username } })
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
      if (
        targetId !== user.id &&
        !user.roles.find((role) => role === 'Administrator')
      ) {
        throw new ForbiddenException('Access denied')
      }

      // Проверка на существование целевого аккаунта
      const targetAccount = await this.account.native.findUnique({
        where: {
          id: targetId,
        },
        select: {
          avatar: true,
        },
      })

      // Если целевой аккаунт не найден
      if (!targetAccount) {
        throw new NotFoundException('Account not found')
      }

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
}
