import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Account } from '@prisma/client'
import { Request } from 'express'

import { TokenPayload } from '@interfaces/tokens'
import { AuthenticatedUser, User } from '@interfaces/user'

import { AccountRepository } from '@/account/account.repository'
import { ConfigService } from '@core/config'

import { serializeUser } from '@utils/serialize'

/**
 * Стратегия проверки токена обновления
 * @description Получает токен из авторизационной куки.
 */
@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
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
          return req.cookies.Refresh
        },
      ]),
      ignoreExpiration: false,
      passReqToCallback: true,
      secretOrKey: config.gett('REFRESH_TOKEN_SECRET'),
    })
  }

  /**
   * Валидация пользователя по JWT-токену
   * @param {TokenPayload} payload Авторизационные данные
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  async validate(
    req: Request,
    payload: TokenPayload,
  ): Promise<AuthenticatedUser> {
    const account = await this.account.findOne({
      where: { id: payload.userid },
    })

    if (!account) {
      throw new UnauthorizedException()
    }

    const verified = !!account.refresh_tokens.find(
      (token) => token === req.cookies.Refresh,
    )

    if (!verified) {
      throw new UnauthorizedException()
    }

    return {
      ...serializeUser<Account, AuthenticatedUser>(account),
      refresh_token: req.cookies.Refresh,
    }
  }
}
