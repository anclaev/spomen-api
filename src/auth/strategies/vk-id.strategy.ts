import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'

import { AuthenticatedUser } from '@interfaces/user'

import { VKIDService } from '@/vk-id/vk-id.service'
import { AuthService } from '@/auth/auth.service'

import { serializeUser } from '@utils/serialize'

@Injectable()
export class VKIDStrategy extends PassportStrategy(Strategy, 'vkid') {
  constructor(
    private vkid: VKIDService,
    private auth: AuthService,
  ) {
    super({
      usernameField: 'uuid',
      passwordField: 'token',
    })
  }

  async validate(uuid: string, token: string): Promise<AuthenticatedUser> {
    console.log(uuid, token)

    try {
      const VKID_ACCESS_TOKEN = await this.vkid.exchangeToken({
        uuid,
        token,
      })

      console.log(VKID_ACCESS_TOKEN)

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

      const user = await this.auth.verifyVKIDUser({
        ...res[0],
        access_token: VKID_ACCESS_TOKEN.access_token,
      })

      return serializeUser<AuthenticatedUser, AuthenticatedUser>(user)
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}
