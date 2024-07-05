import { StreamableFile } from '@nestjs/common'
import { Permission } from '@prisma/client'
import { Readable } from 'stream'
export interface File {
  name: string
  ext: string
  buffer: Buffer
  mime?: string
}

export type PutFileOptions = {
  file: File
  path: string
  owner: string
  acl?: Permission
  compress?: boolean
}

export type Metadata = {
  owner: string
  name: string
  ext: string
  acl: Permission
  'Content-Type': string
}

export class S3File {
  name: string
  bucket: string
  path: string
  etag: string | null = null
  versionId: string | null = null
}

export type SaveUploadOptions = {
  owner: string
  permissions: Permission[]
  file: File
  s3File: S3File
}
