import { IsOptional, IsString } from 'class-validator'

import {
  IsFile,
  MaxFileSize,
  MemoryStoredFile,
  HasMimeType,
} from 'nestjs-form-data'

/**
 * Параметры загрузки аватара аккаунта
 */
export class UploadAvatarDto {
  /**
   * Файл аватара
   */
  @IsFile()
  @MaxFileSize(104857600)
  @HasMimeType(['image/jpeg', 'image/png'])
  file: MemoryStoredFile

  /**
   * Идентификатор аккаунта для загрузки (опционально)
   */
  @IsString()
  @IsOptional()
  id?: string
}
