import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'

import { AuthenticatedUser } from '@interfaces/user'

import { VKIDService } from '@/vk-id/vk-id.service'
import { AuthService } from '@/auth/auth.service'

import { serializeUser } from '@utils/serialize'
import { APIError } from '@interfaces/api-error'

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
    const VKID_ACCESS_TOKEN = await this.vkid.exchangeToken({
      uuid,
      token,
    })

    if (VKID_ACCESS_TOKEN instanceof APIError) {
      throw new HttpException('', HttpStatus.UNAUTHORIZED)
    }

    const res = await this.vkid.getVKIDUsers({
      access_token: VKID_ACCESS_TOKEN.access_token,
      fields: ['id', 'first_name', 'last_name', 'domain', 'bdate', 'photo_200'],
      user_ids: [String(VKID_ACCESS_TOKEN.user_id)],
    })

    if (res instanceof APIError) {
      throw new HttpException('', HttpStatus.UNAUTHORIZED)
    }

    const user = await this.auth.verifyVKIDUser({
      ...res[0],
      access_token: VKID_ACCESS_TOKEN.access_token,
    })

    if (user instanceof APIError) {
      throw new HttpException('', HttpStatus.UNAUTHORIZED)
    }

    return serializeUser<AuthenticatedUser, AuthenticatedUser>(user)
  }
}
