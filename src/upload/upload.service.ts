import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  StreamableFile,
} from '@nestjs/common'

import { BucketItemStat, Client, S3Error } from 'minio'
import { Permission, Upload } from '@prisma/client'
import { InjectMinio } from 'nestjs-minio'
import { Response } from 'express'
import { v4 as uuid } from 'uuid'

const translit = require('cyrillic-to-translit-js')

import { ConfigService } from '@core/config'

import { UploadRepository } from './upload.repository'

import { publicBucketPolicy } from '@utils/s3'
import { toWebp } from '@utils/sharp'

import { PaginatedResult } from '@interfaces/pagination'
import { AuthenticatedUser } from '@interfaces/user'
import {
  Metadata,
  PutFileOptions,
  SaveUploadOptions,
  S3File,
} from '@interfaces/upload'

import { GetUploadsDto } from './dto/get-uploads.dto'

/**
 * Сервис загрузок
 */
@Injectable()
export class UploadService {
  /**
   * Эндпойнт S3-хранилища
   */
  private endpoint: string

  /**
   * Бакет приложения
   */
  private bucket: string

  /**
   * Публичный бакет приложения
   */
  private publicBucket: string

  /**
   * Сервис работы с транслитом
   */
  private translit: any

  /**
   * Базовые права доступа к файлу
   */
  private defaultACL: Permission

  /**
   * Конструктор сервиса
   * @description * Устанавливает текущий бакет приложения из конфигурации
   * @description * Инициализирует сервис транслита
   * @param {Client} s3 Клиент MinIO
   * @param {ConfigService} config Сервис конфигурации
   * @param {UploadRepository} upload Репозиторий загрузок
   */
  constructor(
    @InjectMinio() private readonly s3: Client,
    private readonly config: ConfigService,
    private readonly upload: UploadRepository,
  ) {
    this.endpoint = config.gett<string>('MINIO_ENDPOINT')
    this.bucket = config.gett<string>('MINIO_BUCKET')
    this.publicBucket = config.gett<string>('MINIO_BUCKET_PUBLIC')
    this.defaultACL = config.gett<Permission>('MINIO_DEFAULT_ACL')
    this.translit = translit()
  }

  async getUploads({
    pagination,
    user,
  }: GetUploadsDto): Promise<PaginatedResult<Upload[]>> {
    const { page, size } = pagination

    return await this.upload.findMany({
      page,
      size,
      where: {
        owner_id: {
          equals: user.id,
        },
      },
    })
  }

  /**
   * Получение файла по ID
   * @param {String} id Идентификатор загрузки
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @param {Response} res Объект запроса
   * @returns {StreamableFile} Стрим файла из хранилища
   */
  async getFile(
    id: string,
    user: AuthenticatedUser,
    res: Response,
  ): Promise<StreamableFile> {
    const upload = await this.upload.findOne({
      where: {
        id,
      },
    })

    if (!upload) {
      throw new NotFoundException('Upload not found')
    }

    // Проверка доступа к файлу
    await this.verifyUploadPermissions(upload, user)

    // Проверка существования файла в хранилище
    const object = await this.checkObject(upload.bucket, upload.path)

    if (!object) {
      try {
        await this.upload.delete({
          where: {
            id: upload.id,
          },
        })
      } catch (e) {
        throw new InternalServerErrorException(e)
      }

      throw new NotFoundException('Upload not found')
    }

    res.set({
      'Content-Type': object.metaData['content-type'] ?? 'multipart/form-data',
    })

    return new StreamableFile(
      await this.s3.getObject(upload!.bucket, upload!.path),
    )
  }

  /**
   * Загрузка файла в систему
   * @description * Преобразовывает изображение в webp
   * @description * Преобразовывает имя файла в транслит (для кириллицы)
   * @description * Загружает файл в S3-хранилище (MinIO)
   * @description * Сохраняет данные о файле в базе данных
   * @description * Удаляет файл из хранилища в случае ошибки БД
   * @param {PutFileOptions} options Данные загружаемого файла
   * @returns {Upload} Данные о загрузке в БД
   */
  async putFile({
    file,
    path,
    owner,
    acl,
    compress = false,
  }: PutFileOptions): Promise<Upload | null> {
    // Преобразование изображения в webp
    if (file.mime && file.mime.match(/^image\/(.*)/)) {
      file.buffer = await toWebp(file.buffer, compress)
      file.ext = 'webp'
    }

    const s3File = new S3File()

    // Преобразование имени файла в транслит (для кириллицы)
    s3File.name = this.translit.transform(file.name.replace(' ', '_'))

    // Путь к файлу в хранилище
    s3File.path = `${path}/${s3File.name}-${uuid()}.${file.ext}`

    // Метаданные загрузки, по-умолчанию - публичная
    const metadata: Metadata = {
      owner,
      name: s3File.name,
      ext: file.ext,
      acl: acl ?? 'Public',
      'Content-Type': file.mime ?? 'multipart/form-data',
    }

    s3File.bucket = await this.checkBucket(acl)

    // Загрузка файла в хранилище
    try {
      await this.s3.putObject(
        s3File.bucket,
        s3File.path,
        file.buffer,
        undefined,
        metadata,
      )
    } catch (e: unknown) {
      this.handleS3Error(e as S3Error)
    }

    try {
      return await this.saveUpload({
        owner,
        file,
        s3File,
        permissions: [acl ?? this.defaultACL],
      })
    } catch (e) {
      // Компенсирующая транзакция, если файл не сохранился в БД
      await this.s3.removeObject(this.bucket, s3File.path)

      throw new InternalServerErrorException(e.message)
    }
  }

  /**
   * Сохранение загруженного файла в базе данных
   * @param {SaveUploadOptions} options Данные файла
   * @returns {Upload | null} Запись в базе данных
   */
  private async saveUpload({
    file,
    s3File,
    owner,
    permissions,
  }: SaveUploadOptions): Promise<Upload | null> {
    const id = uuid()
    const url = permissions.find((item) => item === 'Public')
      ? `${this.endpoint}/${s3File.bucket}/${s3File.path}`
      : `${this.config.apiEndpoint}/upload/file/${id}`

    try {
      const createdUpload = await this.upload.create({
        data: {
          id,
          name: file.name,
          ext: file.ext,
          url,
          file_name: s3File.name,
          bucket: s3File.bucket,
          path: s3File.path,
          permissions: {
            set: permissions,
          },
          owner: {
            connect: {
              username: owner,
            },
          },
        },
      })

      return createdUpload
    } catch (e) {
      throw new Error(e)
    }
  }

  /**
   * Назначение бакета для файла
   * @description * Проверяет бакет на существование и создаёт его при отсутствии
   * @description * Назначает публичную политику бакета на основе доступа к файлу
   * @param {string} acl Права доступа к файлу
   * @returns {string} Бакет для файла
   */
  private async checkBucket(acl: string = this.defaultACL): Promise<string> {
    const targetBucket = acl !== 'Public' ? this.bucket : this.publicBucket

    const isExist = await this.s3.bucketExists(targetBucket)

    if (!isExist) {
      await this.s3.makeBucket(targetBucket)

      if (acl === 'Public') {
        await this.s3.setBucketPolicy(targetBucket, publicBucketPolicy)
      }
    }
    return targetBucket
  }

  /**
   * Проверка существования файла в хранилище
   * @param {string} bucket Бакет файла
   * @param {string} path Путь к файлу в хранилище
   * @returns {boolean} Результат проверки
   */
  private async checkObject(
    bucket: string,
    path: string,
  ): Promise<BucketItemStat | null> {
    try {
      return await this.s3.statObject(bucket, path)
    } catch (e) {
      return null
    }
  }

  /**
   * Проверка доступа к файлу
   * @param {Upload} upload Загрузка в базе данных
   * @param {AuthenticatedUser} user Пользователь системы
   */
  private async verifyUploadPermissions(
    upload: Upload,
    user: AuthenticatedUser,
  ): Promise<void> {
    if (
      upload.permissions.find(
        (item) => item === Permission.Public || upload.owner_id === user.id,
      )
    ) {
      return
    }

    // TODO: Проверка доступа на уровне таймлайна, воспоминания, чата

    throw new ForbiddenException('Access denied')
  }

  /**
   * Обработка ошибки S3 (MinIO)
   * @param {S3Error} e Объект ошибки S3
   */
  private handleS3Error(e: S3Error) {
    throw new InternalServerErrorException(e)
  }
}
