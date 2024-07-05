import { Body, Controller, Post } from '@nestjs/common'
import { FormDataRequest } from 'nestjs-form-data'
import { Upload } from '@prisma/client'
import * as mime from 'mime-types'

import { AccountService } from './account.service'

import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

import { AuthenticatedUser } from '@interfaces/user'

import { UploadAvatarDto } from './dto/upload-avatar.dto'

@Controller('account')
export class AccountController {
  constructor(private readonly account: AccountService) {}

  @Post('avatar')
  @UseAuth()
  @FormDataRequest()
  async uploadFile(
    @UseUser() user: AuthenticatedUser,
    @Body() dto: UploadAvatarDto,
  ): Promise<Upload | null> {
    const { file, id } = dto

    return await this.account.uploadAvatar(
      {
        name: file.originalName.slice(0, file.originalName.lastIndexOf('.')),
        ext: mime.extension(file.mimetype) || '',
        mime: file.mimetype,
        buffer: file.buffer,
      },
      user,
      id,
    )
  }
}
