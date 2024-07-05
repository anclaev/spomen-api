import { IsOptional, IsString } from 'class-validator'

import {
  IsFile,
  MaxFileSize,
  MemoryStoredFile,
  HasMimeType,
} from 'nestjs-form-data'

export class UploadAvatarDto {
  @IsFile()
  @MaxFileSize(104857600)
  @HasMimeType(['image/jpeg', 'image/png'])
  file: MemoryStoredFile

  @IsString()
  @IsOptional()
  id?: string
}
