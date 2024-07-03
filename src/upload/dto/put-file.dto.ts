import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator'

import { IsFile, MaxFileSize, MemoryStoredFile } from 'nestjs-form-data'

import { Permission } from '@prisma/client'

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

  @IsEnum(Permission)
  @IsOptional()
  acl?: Permission
}
