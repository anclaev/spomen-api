import { Permission } from '@prisma/client'
export interface File {
  name: string
  ext: string
  buffer: Buffer
  mime?: string
}

export type PutObjectOptions = {
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
}

export class S3File {
  name: string
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
