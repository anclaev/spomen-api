import { Injectable } from '@nestjs/common'
import { InjectMinio } from 'nestjs-minio'
import { v4 as uuid } from 'uuid'
import { Client } from 'minio'

const translit = require('cyrillic-to-translit-js')

import { ConfigService } from '@core/config'

import { toWebp } from '@utils/sharp'

import { Metadata, PutObjectOptions } from '@interfaces/upload'

@Injectable()
export class UploadService {
  private bucket: string
  private translit: any

  constructor(
    @InjectMinio() private readonly s3: Client,
    private readonly config: ConfigService,
  ) {
    this.bucket = config.gett<string>('MINIO_BUCKET')
    this.translit = translit()
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

    file.name = this.translit.transform(file.name.replace(' ', '_'))

    const metadata: Metadata = {
      owner,
      name: file.name,
      ext: file.ext,
      acl: acl ?? 'OwnerOnly',
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
