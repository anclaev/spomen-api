import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator'

import { IsFile, MaxFileSize, MemoryStoredFile } from 'nestjs-form-data'

import { Permission } from '@prisma/client'

/**
 * Параметры загрузки файла
 */
export class PutFileDto {
  /**
   * Файл для загрузки
   */
  @IsFile()
  @MaxFileSize(104857600)
  file: MemoryStoredFile

  /**
   * Путь для сохранения файла
   */
  @IsString()
  @IsNotEmpty()
  path: string

  /**
   * Флаг сжатия файла (опционально)
   */
  @IsBoolean()
  @IsOptional()
  compress?: boolean

  /**
   * Права доступа к файлу (опционально)
   */
  @IsEnum(Permission)
  @IsOptional()
  acl?: Permission
}
