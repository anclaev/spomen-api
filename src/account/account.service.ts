import { ForbiddenException, Injectable } from '@nestjs/common'
import { Account, Permission, Upload } from '@prisma/client'

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
    }

    const uploadedAvatar = await this.upload.putFile({
      file,
      owner: user.username,
      path: toS3Path(STORAGE.AVATARS),
      compress: true,
      acl: Permission.Public,
    })

    // TODO: Создать аватар из загрузки

    await this.account.update({
      data: {
        avatar: {
          connect: {
            id: uploadedAvatar!.id,
          },
        },
      },
      where: {
        id: targetId,
      },
    })

    // TODO: Компенсирующая транзакция на удаление аватара из хранилище, если он не записался в аккаунт

    return uploadedAvatar
  }
}
