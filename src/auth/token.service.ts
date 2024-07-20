import { Injectable, HttpStatus } from '@nestjs/common'
import { Account } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'

// Сервисы
import { AccountService } from '@/account/account.service'
import { ConfigService } from '@core/config'

// Интерфейсы
import { TokenPayload, Tokens } from '@interfaces/tokens'
import { APIError } from '@interfaces/api-error'

/**
 * Сервис работы с токенами
 */
@Injectable()
export class TokenService {
  /**
   * Максимальное количество токенов обновления
   */
  private max_refresh_tokens: number

  /**
   * Конструктор сервиса работы с токенами
   * @param {AccountService} account Сервис аккаунтов
   * @param {ConfigService} config Сервис конфигурации
   * @param {JwtService} jwt Сервис работы с JWT
   */
  constructor(
    private account: AccountService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {
    this.max_refresh_tokens = this.config.gett('MAX_REFRESH_TOKENS')
  }

  /**
   * Выдача авторизационных токенов
   * @param {TokenPayload} payload Данные токенов
   * @param {boolean} force Флаг проверки аккаунта на существование
   * @returns {Tokens} Пара созданных токенов
   */
  async grant(
    payload: TokenPayload,
    force: boolean = false,
  ): Promise<Tokens | APIError> {
    if (!force) {
      const isExist = await this.account.accountIsExists(payload.userid)

      if (isExist instanceof APIError) {
        return new APIError(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Аккаунт для выдачи токенов не найден',
        )
      }

      return await this.generate(payload, isExist.refresh_tokens)
    }

    return await this.generate(payload)
  }

  /**
   * Обновление токена
   * @param {TokenPayload} payload Данные токена
   * @param {String} refresh_token Текущий токен обновления
   * @returns {Tokens} Новая пара токенов
   */
  async refresh(
    payload: TokenPayload,
    refresh_token: string,
  ): Promise<Tokens | APIError> {
    const account = await this.account.getAccount({ id: payload.userid })

    if (account instanceof APIError) {
      return account
    }

    const token = account.refresh_tokens.find(
      (token) => token === refresh_token,
    )

    if (!token) {
      return new APIError(
        HttpStatus.BAD_REQUEST,
        'Токен для обновления не найден',
      )
    }

    return await this.generate(payload)
  }

  /**
   * Удаление токена
   * @param {String} user_id Идентификатор аккаунта
   * @param {String} refresh_token Токен обновления
   * @returns {Account} Обновлённый аккаунт
   */
  async logout(
    user_id: string,
    refresh_token: string,
  ): Promise<Account | APIError> {
    const account = await this.account.getAccount({ id: user_id })

    if (account instanceof APIError) {
      return account
    }

    const tokens = account.refresh_tokens

    const removeTokenIndex = tokens.indexOf(refresh_token)

    if (removeTokenIndex > -1) tokens.splice(removeTokenIndex, 1)

    return (await this.account.updateAccount(
      {
        refresh_tokens: {
          set: tokens,
        },
      },
      { id: user_id },
    ))!
  }

  /**
   * Очистка токенов
   * @param {String} user_id Идентификатор аккаунта
   * @returns {boolean} Результат очистки
   */
  async clear(user_id: string): Promise<boolean> {
    const updated = await this.account.updateAccount(
      {
        refresh_tokens: {
          set: [],
        },
      },
      {
        id: user_id,
      },
    )

    return !(updated instanceof APIError)
  }

  /**
   * Создание токена
   * @param {TokenPayload} payload Авторизационные данные
   * @returns {String} Подписанный JWT-токен
   */

  private async sign(
    payload: TokenPayload,
    type: 'access' | 'refresh',
  ): Promise<string> {
    return await this.jwt.signAsync(payload, {
      issuer: this.config.gett('ORIGIN'),
      expiresIn: this.config.gett(
        type === 'access'
          ? 'ACCESS_TOKEN_EXPIRATION'
          : 'REFRESH_TOKEN_EXPIRATION',
      ),
      secret: this.config.gett(
        type === 'access' ? 'ACCESS_TOKEN_SECRET' : 'REFRESH_TOKEN_SECRET',
      ),
    })
  }

  /**
   * Генерация пары токенов
   * @param {TokenPayload} payload Данные токена
   * @param {string[]} alreadyTokens Текущие токены аккаунта
   * @returns {Tokens} Созданная пара токенов
   */
  private async generate(
    payload: TokenPayload,
    alreadyTokens?: string[],
  ): Promise<Tokens | APIError> {
    let refreshTokens = alreadyTokens ?? []

    if (!alreadyTokens) {
      const targetAccount = await this.account.accountIsExists(payload.userid)

      if (targetAccount instanceof APIError) {
        return new APIError(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Аккаунт для выдачи токенов не найден',
        )
      }
      refreshTokens = targetAccount.refresh_tokens
    }

    const tokens: Tokens = {
      access_token: await this.sign(payload, 'access'),
      refresh_token: await this.sign(payload, 'refresh'),
    }

    const token_count = refreshTokens.length
    const isMaximumTokens = token_count + 1 >= this.max_refresh_tokens

    let slicedTokens: string[] = []

    if (isMaximumTokens) {
      slicedTokens = refreshTokens.slice(
        token_count - this.max_refresh_tokens + 1,
        token_count,
      )

      slicedTokens.push(tokens.refresh_token)
    }

    await this.account.updateAccount(
      {
        refresh_tokens: isMaximumTokens
          ? { set: slicedTokens }
          : { push: [tokens.refresh_token] },
      },
      { id: payload.userid },
    )

    return tokens
  }
}
