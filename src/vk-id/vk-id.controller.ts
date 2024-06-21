import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common'
import { Role } from '@prisma/client'

import { VKIDService } from './vk-id.service'

import {
  VKID_EXCHANGE_TOKEN_PAYLOAD,
  VKID_EXCHANGE_TOKEN_RESPONSE,
  VKIDUser,
} from '@interfaces/vk-id'

import { UseRoles } from '@decorators/roles'
import { UseAuth } from '@decorators/auth'

@Controller('vk-id')
@UseAuth()
export class VKIDController {
  constructor(private readonly vkid: VKIDService) {}

  @Get(':id')
  @UseRoles([Role.Administrator])
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
  async exchangeToken(
    @Body() { silent_token, uuid }: VKID_EXCHANGE_TOKEN_PAYLOAD,
  ): Promise<VKID_EXCHANGE_TOKEN_RESPONSE> {
    const res = await this.vkid.exchangeToken({
      silent_token,
      uuid,
    })

    return res
  }
}
