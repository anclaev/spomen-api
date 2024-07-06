import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Post,
  Query,
} from '@nestjs/common'

import { FormDataRequest } from 'nestjs-form-data'
import { Upload } from '@prisma/client'
import * as mime from 'mime-types'

import { AccountService } from './account.service'

import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

import { AuthenticatedUser } from '@interfaces/user'

import { UploadAvatarDto } from './dto/upload-avatar.dto'
import { RemoveAvatarDto } from './dto/remove-avatar.dto'

@Controller('account')
export class AccountController {
  constructor(private readonly account: AccountService) {}

  @Post('avatar')
  @UseAuth()
  @FormDataRequest()
  async uploadAvatar(
    @UseUser() user: AuthenticatedUser,
    @Body() dto: UploadAvatarDto,
  ): Promise<Upload | null> {
    const { file, id } = dto

    if (
      id &&
      user.id !== id &&
      !user.roles.find((role) => role === 'Administrator')
    ) {
      throw new ForbiddenException('Access denied')
    }

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

  @Delete('avatar')
  @UseAuth()
  async removeAvatar(
    @Query() { id }: RemoveAvatarDto,
    @UseUser() user: AuthenticatedUser,
  ): Promise<Upload | null> {
    if (
      id &&
      user.id !== id &&
      !user.roles.find((role) => role === 'Administrator')
    ) {
      throw new ForbiddenException('Access denied')
    }

    return await this.account.removeAvatar(user, id)
  }
}
