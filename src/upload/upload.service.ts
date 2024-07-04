import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectMinio } from 'nestjs-minio'
import { Upload } from '@prisma/client'
import { Client, S3Error } from 'minio'
import { v4 as uuid } from 'uuid'

const translit = require('cyrillic-to-translit-js')

import { ConfigService } from '@core/config'

import { toWebp } from '@utils/sharp'

import {
  Metadata,
  PutObjectOptions,
  SaveUploadOptions,
  S3File,
} from '@interfaces/upload'

import { UploadRepository } from './upload.repository'

/**
 * Сервис загрузок
 */
@Injectable()
export class UploadService {
  /**
   * Бакет приложения
   */
  private bucket: string

  /**
   * Сервис работы с транслитом
   */
  private translit: any

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
    this.bucket = config.gett<string>('MINIO_BUCKET')
    this.translit = translit()
  }

  /**
   * Загрузка файла в систему
   * @description * Преобразовывает изображение в webp
   * @description * Преобразовывает имя файла в транслит (для кириллицы)
   * @description * Загружает файл в S3-хранилище (MinIO)
   * @description * Сохраняет данные о файле в базе данных
   * @description * Удаляет файл из хранилища в случае ошибки БД
   * @param {PutObjectOptions} options Данные загружаемого файла
   * @returns {Upload} Данные о загрузке в БД
   */
  async putObject({
    file,
    path,
    owner,
    acl,
    compress = false,
  }: PutObjectOptions): Promise<Upload | null> {
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
    }

    await this.checkBucket(this.bucket)

    // Загрузка файла в хранилище
    try {
      await this.s3.putObject(
        this.bucket,
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
        permissions: [acl ?? 'Public'],
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
    try {
      const createdUpload = await this.upload.create({
        data: {
          file_name: s3File.name,
          url: s3File.path,
          ext: file.ext,
          name: file.name,
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
   * Проверка существования бакета
   * @description Проверяет бакет на существование и создаёт при отсутствии
   * @param {string} bucket Название бакета
   */
  private async checkBucket(bucket: string): Promise<void> {
    const isExist = await this.s3.bucketExists(bucket)

    if (!isExist) {
      return await this.s3.makeBucket(bucket)
    }

    return
  }

  /**
   * Обработка ошибки S3 (MinIO)
   * @param {S3Error} e Объект ошибки S3
   */
  private handleS3Error(e: S3Error) {
    throw new InternalServerErrorException(e)
  }
}
