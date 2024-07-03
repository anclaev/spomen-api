import { Injectable } from '@nestjs/common'
import { InjectMinio } from 'nestjs-minio'
import { v4 as uuid } from 'uuid'
import { Client } from 'minio'

import { ConfigService } from '@core/config'

import { toWebp } from '@utils/sharp'

import { PutObjectOptions, Metadata } from '@interfaces/upload'

@Injectable()
export class UploadService {
  private bucket: string

  constructor(
    @InjectMinio() private readonly s3: Client,
    private readonly config: ConfigService,
  ) {
    this.bucket = config.gett<string>('MINIO_BUCKET')
  }

  async putObject({
    file,
    path,
    owner,
    acl,
    compress = false,
  }: PutObjectOptions) {
    if (file.mime && file.mime.match(/^image\/(.*)/)) {
      file.buffer = await toWebp(file.buffer, compress)
      file.ext = 'webp'
    }

    const metadata: Metadata = {
      owner,
      name: file.name,
      ext: file.ext,
      acl: 'OwnerOnly',
    }

    const uploaded = await this.s3.putObject(
      this.bucket,
      `${path}/${file.name}-${uuid()}.${file.ext}`,
      file.buffer,
      undefined,
      metadata,
    )

    return uploaded
  }
}
