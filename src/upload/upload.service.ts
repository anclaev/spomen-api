import {
  StreamableFile,
  Injectable,
  HttpStatus,
  OnModuleInit,
  Logger,
} from '@nestjs/common'
import { BucketItemStat, Client, S3Error } from 'minio'
import { Permission, Upload } from '@prisma/client'
import { InjectMinio } from 'nestjs-minio'
import { Response } from 'express'
import { v4 as uuid } from 'uuid'

const translit = require('cyrillic-to-translit-js')

// Сервисы
import { ConfigService } from '@core/config'

// Репозитории
import { UploadRepository } from './upload.repository'

// Утилиты
import { publicBucketPolicy } from '@utils/s3'
import { colorize } from '@utils/funcs'
import { toWebp } from '@utils/sharp'

// Интерфейсы
import {
  Metadata,
  PutFileOptions,
  SaveUploadOptions,
  S3File,
} from '@interfaces/upload'

import { PaginatedResult } from '@interfaces/pagination'
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'

// Enums
import { CONSOLE_COLOR } from '@enums/console-color'

// DTO
import { GetUploadsDto } from './dto/get-uploads.dto'

/**
 * Сервис загрузок
 */
@Injectable()
export class UploadService implements OnModuleInit {
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
   * @description
   * * Устанавливает текущий бакет приложения из конфигурации
   * * Инициализирует сервис транслита
   * @param {Client} s3 Клиент MinIO
   * @param {ConfigService} config Сервис конфигурации
   * @param {UploadRepository} upload Репозиторий загрузок
   * @param {Logger} logger Логгер приложения
   */
  constructor(
    @InjectMinio() private readonly s3: Client,
    private readonly config: ConfigService,
    private readonly upload: UploadRepository,
    private readonly logger: Logger,
  ) {
    this.publicBucket = config.gett<string>('MINIO_BUCKET_PUBLIC')
    this.defaultACL = config.gett<Permission>('MINIO_DEFAULT_ACL')
    this.endpoint = config.gett<string>('MINIO_ENDPOINT')
    this.bucket = config.gett<string>('MINIO_BUCKET')
    this.translit = translit()
  }

  /**
   * Проверка на существование бакетов при инициализации модуля
   */
  async onModuleInit() {
    const privateIsExist = await this.s3.bucketExists(this.bucket)
    const publicIsExist = await this.s3.bucketExists(this.publicBucket)

    if (!privateIsExist) {
      this.logger.warn(
        `Bucket ${colorize(this.bucket, CONSOLE_COLOR.PRIMARY)} ${colorize('not found!', CONSOLE_COLOR.WARN)}`,
        'UploadService',
      )
      await this.createBucket(this.bucket)
    }

    if (!publicIsExist) {
      this.logger.warn(
        `Bucket ${colorize(this.publicBucket, CONSOLE_COLOR.PRIMARY)} ${colorize('not found!', CONSOLE_COLOR.WARN)}`,
        'UploadService',
      )
      await this.createBucket(this.publicBucket, publicBucketPolicy)
    }
  }

  /**
   * Получение списка загрузок
   * @param {GetUploadsDto} Параметры поиска
   * @returns {PaginatedResult<Upload[]>} Список загрузок
   */
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
   * @description
   * * Возвращает ошибку 404, если загрузка не найдена
   * * Возвращает ошибку 403, если к загрузке нет доступа
   * @param {String} id Идентификатор загрузки
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @param {Response} res Объект запроса
   * @returns {StreamableFile | APIError} Стрим файла из хранилища
   */
  async getFile(
    id: string,
    user: AuthenticatedUser,
    res: Response,
  ): Promise<StreamableFile | APIError> {
    const upload = await this.uploadIsExists(id)

    if (upload instanceof APIError) {
      return upload
    }

    // Проверка доступа к файлу
    const isAccessed = await this.verifyUploadPermissions(upload, user)

    if (!isAccessed) {
      return new APIError(HttpStatus.FORBIDDEN)
    }

    // Проверка существования файла в хранилище
    const result = await this.checkObject(upload.bucket, upload.path)

    if (result instanceof APIError) {
      // Удаление данных о загрузке при отсутствии в хранилище
      try {
        await this.upload.delete({
          where: {
            id: upload.id,
          },
        })
      } catch (e) {
        return new APIError(HttpStatus.NOT_FOUND, 'Загрузка не найдена')
      }
    }

    // Прикрепление типа файла к запросу
    res.set({
      'Content-Type':
        (result as BucketItemStat).metaData['content-type'] ??
        'multipart/form-data',
    })

    return new StreamableFile(
      await this.s3.getObject(upload!.bucket, upload!.path),
    )
  }

  /**
   * Загрузка файла в систему
   * @description
   * * Преобразовывает изображение в webp
   * * Преобразовывает имя файла в транслит (для кириллицы)
   * * Загружает файл в S3-хранилище (MinIO)
   * * Сохраняет данные о файле в базе данных
   * * Удаляет файл из хранилища в случае ошибки БД
   * @param {PutFileOptions} options Данные загружаемого файла
   * @returns {Upload | APIError} Данные о загрузке в БД
   */
  async putFile({
    file,
    path,
    owner,
    acl,
    compress = false,
  }: PutFileOptions): Promise<Upload | APIError> {
    // Преобразование изображения в webp
    if (file.mime && file.mime.match(/^image\/(.*)/)) {
      try {
        file.buffer = await toWebp(file.buffer, compress)
      } catch (e) {
        return new APIError(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Ошибка преобразования изображения',
        )
      }
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

    // Проверка существования бакета
    s3File.bucket = this.setBucket(acl)

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
      return this.handleS3Error(e as S3Error)
    }

    const result = await this.saveUpload({
      owner,
      file,
      s3File,
      permissions: [acl ?? this.defaultACL],
    })

    if (result instanceof APIError) {
      // Компенсирующая транзакция, если файл не сохранился в БД
      await this.s3.removeObject(this.bucket, s3File.path)
    }

    return result
  }

  /**
   * Удаление файла по идентификатору
   * @param {string} id Идентификатор файла
   * @returns {Upload} Удалённый файл
   */
  async deleteFile(id: string): Promise<Upload | APIError> {
    const upload = await this.uploadIsExists(id)

    if (upload instanceof APIError) {
      return upload
    }

    // Проверка на то, создан ли файл сторонним сервисом
    if (upload.is_system) {
      return new APIError(HttpStatus.FORBIDDEN)
    }

    // Удаление данных о загрузке из базы
    await this.upload.delete({
      where: {
        id: upload.id,
      },
    })

    try {
      await this.s3.removeObject(upload.bucket, upload.path)
    } catch (e: unknown) {
      // Компенсирующая транзакция, если файл не был удалён из хранилища
      await this.upload.create({
        data: {
          ...upload,
          permissions: {
            set: upload.permissions,
          },
          owner: {
            connect: {
              id: upload.owner_id,
            },
          },
        },
      })

      return this.handleS3Error(e as S3Error)
    }

    return upload
  }

  /**
   * Сохранение загруженного файла в базе данных
   * @param {SaveUploadOptions} options Данные файла
   * @returns {Upload | APIError} Запись в базе данных
   */
  private async saveUpload({
    file,
    s3File,
    owner,
    permissions,
  }: SaveUploadOptions): Promise<Upload | APIError> {
    const id = uuid()
    const url = permissions.find((item) => item === 'Public')
      ? `${this.endpoint}/${s3File.bucket}/${s3File.path}`
      : `${this.config.apiEndpoint}/upload/file/${id}`

    try {
      return await this.upload.create({
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
    } catch (e) {
      return new APIError(HttpStatus.BAD_REQUEST, e.message)
    }
  }

  /**
   * Назначение бакета для файла
   * @description
   * * Назначает бакет на основе политики доступа к фалйу
   * @param {string} acl Права доступа к файлу
   * @returns {string} Бакет для файла
   */
  private setBucket(acl: string = this.defaultACL): string {
    return acl !== 'Public' ? this.bucket : this.publicBucket
  }

  /**
   * Проверка существования файла в хранилище
   * @param {string} bucket Бакет файла
   * @param {string} path Путь к файлу в хранилище
   * @returns {BucketItemStat | APIError} Результат проверки
   */
  private async checkObject(
    bucket: string,
    path: string,
  ): Promise<BucketItemStat | APIError> {
    try {
      return await this.s3.statObject(bucket, path)
    } catch (e) {
      return this.handleS3Error(e as S3Error)
    }
  }

  /**
   * Проверка доступа к файлу
   * @param {Upload} upload Загрузка в базе данных
   * @param {AuthenticatedUser} user Пользователь системы
   * @returns {boolean} Флаг доступа
   */
  private async verifyUploadPermissions(
    upload: Upload,
    user: AuthenticatedUser,
  ): Promise<boolean> {
    if (user.roles.find((role) => role === 'Administrator')) {
      return true
    }

    return !!upload.permissions.find(
      (item) => item === Permission.Public || upload.owner_id === user.id,
    )

    // TODO: Проверка доступа на уровне таймлайна, воспоминания, чата
  }

  /**
   * Обработка ошибки S3 (MinIO)
   * @param {S3APIError} e Объект ошибки S3
   * @return {APIError} Преобразованная ошибка
   */
  private handleS3Error(e: S3Error): APIError {
    return new APIError(HttpStatus.INTERNAL_SERVER_ERROR, e.message)
  }

  /**
   * Проверка на существование загрузки в базед анных
   * @param {string} id Идентификатор загрузки
   * @returns {Upload | APIError} Загрузка в базе данных
   */
  private async uploadIsExists(id: string): Promise<Upload | APIError> {
    const upload = await this.upload.findOne({
      where: {
        id,
      },
    })

    if (!upload) {
      return new APIError(HttpStatus.NOT_FOUND, 'Загрузка не найдена')
    }

    return upload
  }

  /**
   * Создание бакета в S3
   * @param {string} bucketName Название бакета
   * @param {string} bucketPolicy Политика доступа к бакету
   */
  private async createBucket(
    bucketName: string,
    bucketPolicy?: string,
  ): Promise<void> {
    await this.s3.makeBucket(bucketName)

    if (bucketPolicy) {
      await this.s3.setBucketPolicy(bucketName, bucketPolicy)
    }

    this.logger.log(
      `Bucket ${colorize(bucketName, CONSOLE_COLOR.PRIMARY)} ${colorize('successfully created')}`,
      'UploadService',
    )
  }
}
