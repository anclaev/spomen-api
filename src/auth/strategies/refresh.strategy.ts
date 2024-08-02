import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Account } from '@prisma/client'
import { Request } from 'express'

// Сервисы
import { AccountService } from '@/account/account.service'
import { ConfigService } from '@/config/config.service'

// Утилиты
import { serializeUser } from '@utils/serialize'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { TokenPayload } from '@interfaces/tokens'
import { APIError } from '@interfaces/api-error'

/**
 * Стратегия проверки токена обновления
 * @description Получает токен из авторизационной куки
 */
@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  /**
   * Конструктор стратегии
   * @param {ConfigService} config Сервис конфигурации
   * @param {AccountService} account Репозиторий аккаунта
   */
  constructor(
    private readonly config: ConfigService,
    private readonly account: AccountService,
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
    const account = await this.account.getAccount({ id: payload.userid })

    if (account instanceof APIError) {
      throw new HttpException('', HttpStatus.UNAUTHORIZED)
    }

    const verified = account!.refresh_tokens.find(
      (token) => token === req.cookies.Refresh,
    )

    if (!verified) {
      throw new HttpException('', HttpStatus.UNAUTHORIZED)
    }

    return {
      ...serializeUser<Account, AuthenticatedUser>(account!),
      refresh_token: req.cookies.Refresh,
    }
  }
}
