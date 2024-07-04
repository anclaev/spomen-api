import { Body, Controller, Post } from '@nestjs/common'
import { FormDataRequest } from 'nestjs-form-data'
import { Upload } from '@prisma/client'
import * as mime from 'mime-types'

import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

import { UploadService } from './upload.service'

import { toS3Path } from '@utils/funcs'

import { AuthenticatedUser } from '@interfaces/user'

import { PutFileDto } from './dto/put-file.dto'

@Controller('upload')
export class UploadController {
  constructor(private readonly upload: UploadService) {}

  @Post()
  @UseAuth(['Administrator'])
  @FormDataRequest()
  async uploadFile(
    @UseUser() user: AuthenticatedUser,
    @Body() dto: PutFileDto,
  ): Promise<Upload | null> {
    const { file, path, acl, compress } = dto

    return await this.upload.putFile({
      file: {
        name: file.originalName.slice(0, file.originalName.lastIndexOf('.')),
        ext: mime.extension(file.mimetype) || '',
        mime: file.mimetype,
        buffer: file.buffer,
      },
      path: toS3Path(path),
      owner: user.username,
      acl,
      compress,
    })
  }
}
