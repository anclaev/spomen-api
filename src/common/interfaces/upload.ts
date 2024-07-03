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
