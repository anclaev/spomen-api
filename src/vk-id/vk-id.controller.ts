import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common'

import { Role } from '@prisma/client'
import { Response } from 'express'

import { VKIDService } from './vk-id.service'

import { AuthenticatedUser } from '@interfaces/user'
import { VKIDUser } from '@interfaces/vk-id'
import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

import { VKIDGuard } from '@/auth/guards/vkid.guard'
import { AuthService } from '@/auth/auth.service'
import { serializeUser } from '@utils/serialize'
import { injectCookies } from '@utils/cookies'

@Controller('vk-id')
export class VKIDController {
  constructor(
    private readonly vkid: VKIDService,
    private readonly auth: AuthService,
  ) {}

  @Get(':id')
  @UseAuth([Role.Administrator])
  async getVKIDUserById(
    @Param('id') id: string,
    @Body() { access_token }: { access_token: string },
  ): Promise<VKIDUser | null> {
    const user = await this.vkid.getVKIDUsers({
      user_ids: [id],
      fields: [
        'first_name',
        'last_name',
        'photo_200',
        'domain',
        'screen_name',
        'bdate',
      ],
      access_token,
    })

    return user.length > 0 ? user[0] : null
  }

  @Post('exchange-token')
  @HttpCode(200)
  @UseGuards(VKIDGuard)
  exchangeToken(@UseUser() user: AuthenticatedUser, @Res() res: Response) {
    const cookies = this.auth.cookiesWithTokens({
      access_token: user.access_token,
      refresh_token: user.refresh_token,
    })

    return injectCookies(res, cookies).send(
      serializeUser<AuthenticatedUser, AuthenticatedUser>(user),
    )
  }
}
