import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  Res,
  StreamableFile,
} from '@nestjs/common'

import { FormDataRequest } from 'nestjs-form-data'
import { Upload } from '@prisma/client'
import { Response } from 'express'
import * as mime from 'mime-types'

// Декораторы
import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

// Сервисы
import { UploadService } from './upload.service'

// Утилиты
import { toS3Path } from '@utils/funcs'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'

// DTO
import { PutFileDto } from './dto/put-file.dto'

/**
 * Контроллер загрузок
 */
@Controller('upload')
export class UploadController {
  /**
   * Конструктор контроллера загрузок
   * @param {UploadService} upload Сервис работы с загрузками
   */
  constructor(private readonly upload: UploadService) {}

  /**
   * Обработка получения файла по идентификатору загрузки
   * @param {string} id Идентификатор загрузки
   * @param {AuthenticatedUser} user Текущи йпользователь системы
   * @param {Response} res Объект ответа запроса
   * @returns {StreamableFile} res Файл из хранилища
   */
  @Get('file/:id')
  @UseAuth()
  async getFile(
    @Param('id') id: string,
    @UseUser() user: AuthenticatedUser,
    @Res({ passthrough: true }) res: Response,
  ): Promise<StreamableFile> {
    const upload = await this.upload.getFile(id, user, res)

    return this.catchError<StreamableFile>(upload)
  }

  /**
   * Обработка загрузки файла в хранилище
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @param {PutFileDto} dto Параметры загрузки
   * @returns {Upload} Загрузка в базе данных
   */
  @Post()
  @UseAuth(['Administrator'])
  @FormDataRequest()
  async uploadFile(
    @UseUser() user: AuthenticatedUser,
    @Body() dto: PutFileDto,
  ): Promise<Upload> {
    const { file, path, acl, compress } = dto

    const upload = await this.upload.putFile({
      file: {
        name: file.originalName.slice(0, file.originalName.lastIndexOf('.')),
        ext: mime.extension(file.mimetype) || '',
        mime: file.mimetype,
        buffer: file.buffer,
      },
      path: toS3Path(path),
      owner: user.username,
      acl,
      compress,
    })

    return this.catchError<Upload>(upload)
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
