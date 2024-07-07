import {
  Body,
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common'

import { FormDataRequest } from 'nestjs-form-data'
import { Upload } from '@prisma/client'
import * as mime from 'mime-types'

// Сервисы
import { AccountService } from './account.service'

// Декораторы
import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'

// DTO
import { UploadAvatarDto } from './dto/upload-avatar.dto'
import { RemoveAvatarDto } from './dto/remove-avatar.dto'

/**
 * Контроллер аккаунтов
 */
@Controller('account')
export class AccountController {
  /**
   * Конструктор контроллера аккаунтов
   * @param {AccountService} account Сервис аккаунтов
   */
  constructor(private readonly account: AccountService) {}

  /**
   * Обработка загрузки аватара аккаунта
   * @param {UploadAvatarDto} dto Параметры загрузки
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Upload} Загрузка в базе данных
   */
  @Post('avatar')
  @UseAuth()
  @FormDataRequest()
  async uploadAvatar(
    @Body() dto: UploadAvatarDto,
    @UseUser() user: AuthenticatedUser,
  ): Promise<Upload> {
    const { file, id } = dto

    if (
      id &&
      user.id !== id &&
      !user.roles.find((role) => role === 'Administrator')
    ) {
      this.catchError(new APIError(HttpStatus.FORBIDDEN))
    }

    const uploadedAvatar = await this.account.uploadAvatar(
      {
        name: file.originalName.slice(0, file.originalName.lastIndexOf('.')),
        ext: mime.extension(file.mimetype) || '',
        mime: file.mimetype,
        buffer: file.buffer,
      },
      user,
      id,
    )

    return this.catchError<Upload>(uploadedAvatar)
  }

  /**
   * Обработка удаления аватара аккаунта
   * @param {RemoveAvatarDto} Параметры удаления аватара
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Upload} Удалённая загрузка
   */
  @Delete('avatar')
  @UseAuth()
  async removeAvatar(
    @Query() { id }: RemoveAvatarDto,
    @UseUser() user: AuthenticatedUser,
  ): Promise<Upload> {
    if (
      id &&
      user.id !== id &&
      !user.roles.find((role) => role === 'Administrator')
    ) {
      this.catchError(new APIError(HttpStatus.FORBIDDEN))
    }

    const removedAvatar = await this.account.removeAvatar(user, id)

    return this.catchError<Upload>(removedAvatar)
  }

  /**
   * Обработчик ошибок
   * @param {unknown | APIError} data Результат запроса
   * @returns {unknown} Обработанный запрос
   */
  private catchError<T>(data: T | APIError): T {
    if (data instanceof APIError) {
      throw new HttpException(data.message, data.status)
    }

    return data
  }
}
