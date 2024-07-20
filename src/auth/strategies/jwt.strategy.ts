import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Account } from '@prisma/client'
import { Request } from 'express'

// Сервисы
import { AccountService } from '@/account/account.service'
import { ConfigService } from '@core/config'

// Утилиты
import { serializeUser } from '@utils/serialize'

// Интерфейсы
import { TokenPayload } from '@interfaces/tokens'
import { APIError } from '@interfaces/api-error'
import { User } from '@interfaces/user'

/**
 * Стратегия авторизации пользователя по JWT-токену
 * @description Получает токен из авторизационной куки
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
    private readonly account: AccountService,
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
   * @returns {User} Авторизованный пользователь
   */
  async validate(payload: TokenPayload): Promise<User> {
    const account = await this.account.getAccount({ id: payload.userid })

    if (account instanceof APIError) {
      throw new HttpException('', HttpStatus.UNAUTHORIZED)
    }

    return serializeUser<Account, User>(account!)
  }
}
