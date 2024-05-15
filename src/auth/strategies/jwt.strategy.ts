import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

import { TokenPayload } from '@interfaces/token-payload'
import { Request } from '@interfaces/request'
import { ConfigService } from '@core/config'

import { AccountRepository } from '@/account/account.repository'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly config: ConfigService,
    private readonly account: AccountRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.Authentication ?? null
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: config.gett('ACCESS_TOKEN_SECRET'),
    })
  }

  async validate(payload: TokenPayload) {
    const account = await this.account.findOne({
      where: { id: payload.user_id },
    })

    if (account) {
      const { password, ...user } = account

      return user
    } else {
      throw new UnauthorizedException()
    }
  }
}
