import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { AccountRepository } from '@/account/account.repository'

import { ConfigService } from '@core/config'

import { TokenPayload, TokensResponse } from '@interfaces/tokens'

@Injectable()
export class TokenService {
  private max_refresh_tokens: number

  constructor(
    private jwt: JwtService,
    private config: ConfigService,
    private account: AccountRepository,
  ) {
    this.max_refresh_tokens = this.config.gett('MAX_REFRESH_TOKENS')
  }

  async grant(
    payload: TokenPayload,
    force: boolean = false,
  ): Promise<TokensResponse | null> {
    if (!force) {
      const account = await this.account.findOne({
        where: { id: payload.userid },
      })

      if (!account) {
        return null
      }
    }

    return await this.generate(payload)
  }

  /**
   * Обновление токена
   * @param {TokenPayload} payload Данные токена
   * @param {String} refresh_token Текущий токен обновления
   * @returns {Tokens | null} Новая пара токенов
   */
  async refresh(
    payload: TokenPayload,
    refresh_token: string,
  ): Promise<TokensResponse | null> {
    const account = await this.account.findOne({
      where: { id: payload.userid },
    })

    if (!account) {
      return null
    }

    const token = account.refresh_tokens.find(
      (token) => token === refresh_token,
    )

    if (!token) {
      return null
    }

    return await this.generate(payload)
  }

  /**
   * Удаление токена обновления
   * @param {String} user_id Идентификатор аккаунта
   * @param {String} refresh_token Токен обновления
   * @returns {Boolean} Результат очистки
   */
  async logout(
    user_id: string,
    refresh_token: string,
  ): Promise<boolean | null> {
    const account = await this.account.findOne({
      where: { id: user_id },
    })

    if (!account) {
      return null
    }

    const tokens = account.refresh_tokens.filter(
      (token) => token === refresh_token,
    )

    const updated = await this.account.update({
      where: { id: user_id },
      data: {
        refresh_tokens: {
          set: tokens,
        },
      },
    })

    return updated ? !!updated : null
  }

  /**
   * Очистка токенов обновления
   * @param {String} user_id Идентификатор аккаунта
   * @returns {Boolean} Результат очистки
   */
  async clear(user_id: string): Promise<boolean | null> {
    const updated = await this.account.update({
      where: {
        id: user_id,
      },
      data: {
        refresh_tokens: {
          set: [],
        },
      },
    })

    return updated ? !!updated : null
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
   * @returns {Tokens | null} Новая пара токенов
   */
  private async generate(
    payload: TokenPayload,
  ): Promise<TokensResponse | null> {
    const account = await this.account.findOne({
      where: { id: payload.userid },
    })

    if (!account) {
      return null
    }

    const tokens: TokensResponse = {
      access_token: await this.sign(payload, 'access'),
      refresh_token: await this.sign(payload, 'refresh'),
      token_type: 'bearer',
    }

    const token_count = account.refresh_tokens.length

    if (token_count + 1 >= this.max_refresh_tokens) {
      const slicedTokens = account.refresh_tokens.slice(
        token_count - this.max_refresh_tokens + 1,
        token_count,
      )

      slicedTokens.push(tokens.refresh_token)

      await this.account.update({
        where: { id: payload.userid },
        data: { refresh_tokens: { set: slicedTokens } },
      })
    } else {
      await this.account.update({
        where: { id: payload.userid },
        data: { refresh_tokens: { push: [tokens.refresh_token] } },
      })
    }

    return tokens
  }
}
