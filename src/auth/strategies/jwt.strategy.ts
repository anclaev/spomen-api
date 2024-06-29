import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Account } from '@prisma/client'
import { Request } from 'express'

import { TokenPayload } from '@interfaces/tokens'
import { User } from '@interfaces/user'

import { AccountRepository } from '@/account/account.repository'
import { ConfigService } from '@core/config'

import { serializeUser } from '@utils/serialize'

/**
 * Стратегия авторизации пользователя по JWT-токену
 * @description Получает токен из авторизационной куки.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  /**
   * Конструктор стратегии
   * @param {ConfigService} config Сервис конфигурации
   * @param {AccountRepository} account Репозиторий аккаунта
   */
  constructor(
    private readonly config: ConfigService,
    private readonly account: AccountRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req.cookies.Authentication
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: config.gett('ACCESS_TOKEN_SECRET'),
    })
  }

  /**
   * Валидация пользователя по JWT-токену
   * @param {TokenPayload} payload Авторизационные данные
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  async validate(payload: TokenPayload): Promise<User> {
    const account = await this.account.findOne({
      where: { id: payload.userid },
    })

    if (account) {
      return serializeUser<Account, User>(account)
    } else {
      throw new UnauthorizedException()
    }
  }
}
