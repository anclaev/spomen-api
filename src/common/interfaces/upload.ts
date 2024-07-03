import { ACL } from '@enums/upload'

export type ACLType = keyof ACL

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
  acl?: ACL
  compress?: boolean
}
