import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Account } from '@prisma/client'

import { TokenPayload } from '@interfaces/token-payload'
import { ConfigService } from '@core/config'

import { AccountRepository } from '@/account/account.repository'

/**
 * Стратегия авторизации пользователя по JWT-токену
 * @description Получает токен из заголовка Bearer.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Конструктор стратегии авторизации по почте
   * @param {ConfigService} config Сервис конфигурации
   * @param {AccountRepository} account Репозиторий аккаунта
   */
  constructor(
    private readonly config: ConfigService,
    private readonly account: AccountRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.gett('ACCESS_TOKEN_SECRET'),
    })
  }

  /**
   * Валидация пользователя по JWT-токену
   * @param {TokenPayload} payload Авторизационные данные
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  async validate(payload: TokenPayload): Promise<Omit<Account, 'password'>> {
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
