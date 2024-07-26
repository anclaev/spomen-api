import { Permission, Role } from '@prisma/client'

/**
 * Фильтры для отбора загрузок
 */
export type UploadFilters = {
  name: any | null
  ext: any | null
  owner_id: any | null
  owner: any | null
  is_system: any | null
  permissions: any | null
}

/**
 * Интерфейс файла
 */
export interface File {
  /**
   * Название файла
   */
  original_name: string

  /**
   * Кастомное название файла
   */
  name?: string

  /**
   * Расширение файла
   */
  ext: string

  /**
   * Данные файла
   */
  buffer: Buffer

  /**
   * Тип файла
   */
  mime?: string
}

/**
 * Опции загрузки файла в хранилище
 */
export type PutFileOptions = {
  /**
   * Объект файла
   */
  file: File

  /**
   * Путь сохранения файла
   */
  path: string

  /**
   * ID владельца файла
   */
  owner: string

  /**
   * Роль владельца файла
   */
  owner_roles: Role[]

  /**
   * Права доступа к файлу
   */
  acl?: Permission

  /**
   * Сжатие файла
   */
  compress?: boolean
}

/**
 * Метаданные файла
 */
export type Metadata = {
  /**
   * ID владельца файла
   */
  owner: string

  /**
   * Исходное название файла
   */
  name: string

  /**
   * Расширение файла
   */
  ext: string

  /**
   * Права доступа к файлу
   */
  acl: Permission

  /**
   * Тип файла
   */
  'Content-Type': string
}

/**
 * Класс файла в хранилище
 */
export class S3File {
  /**
   * Хэшированное название файла
   */
  name: string

  /**
   * Бакет файла
   */
  bucket: string

  /**
   * Путь к файлу
   */
  path: string

  /**
   * ETAG файла
   */
  etag: string | null = null

  /**
   * Версия файла
   */
  versionId: string | null = null
}

/**
 * Параметры сохранения загрузки
 */
export type SaveUploadOptions = {
  /**
   * ID владельца файла
   */
  owner: string

  /**
   * Права доступа к файлу
   */
  permissions: Permission[]

  /**
   * Объект файла
   */
  file: File

  /**
   * Объект файла в хранилище
   */
  s3File: S3File
}
