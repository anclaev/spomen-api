import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator'

import { IsFile, MaxFileSize, MemoryStoredFile } from 'nestjs-form-data'

import { ACL } from '@enums/upload'

export class PutFileDto {
  @IsFile()
  @MaxFileSize(104857600)
  file: MemoryStoredFile

  @IsString()
  @IsNotEmpty()
  path: string

  @IsBoolean()
  @IsOptional()
  compress?: boolean

  @IsEnum(ACL)
  @IsOptional()
  acl?: ACL
}
