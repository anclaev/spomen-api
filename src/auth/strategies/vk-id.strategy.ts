import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'

import { VKIDUser } from '@interfaces/vk-id'

import { VKIDService } from '@/vk-id/vk-id.service'

@Injectable()
export class VKIDStrategy extends PassportStrategy(Strategy, 'vkid') {
  constructor(private vkid: VKIDService) {
    super({
      usernameField: 'uuid',
      passwordField: 'token',
    })
  }

  async validate(uuid: string, token: string): Promise<VKIDUser> {
    try {
      const VKID_ACCESS_TOKEN = await this.vkid.exchangeToken({
        uuid,
        silent_token: token,
      })

      const res = await this.vkid.getVKIDUsers({
        access_token: VKID_ACCESS_TOKEN.access_token,
        fields: [
          'id',
          'first_name',
          'last_name',
          'domain',
          'bdate',
          'photo_200',
        ],
        user_ids: [String(VKID_ACCESS_TOKEN.user_id)],
      })

      return {
        ...res[0],
        access_token: VKID_ACCESS_TOKEN.access_token,
      }
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}
