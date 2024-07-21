import { Permission } from '@prisma/client'

export type UploadFilters = {
  name: any | null
  ext: any | null
  owner_id: any | null
  is_system: any | null
}

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
