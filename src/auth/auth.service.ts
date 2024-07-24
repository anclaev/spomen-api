import { HttpStatus, Injectable } from '@nestjs/common'
import generator from 'generate-password-ts'
import { Role } from '@prisma/client'
import { Account } from '@graphql'

import * as moment from 'moment'
import * as argon2 from 'argon2'

// Сервисы
import { AccountService } from '@/account/account.service'
import { TokenService } from './token.service'
import { ConfigService } from '@core/config'

// Утилиты
import { Cookies } from '@utils/cookies'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'
import { VKIDUser } from '@interfaces/vk-id'
import { Tokens } from '@interfaces/tokens'

// DTO
import { SignUpDto } from './dto/sign-up.dto'
import { LogoutDto } from './dto/logout.dto'

/**
 * Сервис авторизации
 */
@Injectable()
export class AuthService {
  /**
   * Домен для установки авторизационных кук
   * @private
   */
  private readonly cookieDomain: string

  /**
   * Конструктор сервиса авторизации
   * @param {ConfigService} config Сервис работы с конфигурацией
   * @param {TokenService} token Сервис работы с JWT-токенами
   * @param {AccountService} account Сервис аккаунта
   */
  constructor(
    private readonly config: ConfigService,
    private readonly token: TokenService,
    private readonly account: AccountService,
  ) {
    this.cookieDomain =
      process.env.NODE_ENV !== 'local'
        ? this.config.gett('DOMAIN')
        : 'localhost'
  }

  /**
   * Регистрация в приложении
   * @param {SignUpDto} dto Данные для авторизации
   * @returns {AuthenticatedUser} Созданный аккаунт
   */
  async signUp(dto: SignUpDto): Promise<AuthenticatedUser | APIError> {
    const password = await argon2.hash(dto.password)

    const createdAccount = await this.account.createAccount({
      data: {
        ...dto,
        password,
        birthday: dto.birthday
          ? new Date(dto.birthday).toISOString()
          : undefined,
        roles: {
          set: [Role.Public],
        },
      },
    })

    if (createdAccount instanceof APIError) {
      return new APIError(HttpStatus.CONFLICT, 'Логин уже зарегистрирован')
    }

    const tokens = await this.token.grant(
      {
        email: createdAccount.email,
        userid: createdAccount.id,
        username: createdAccount.username,
        vk_avatar: createdAccount.vk_avatar,
        vk_id: createdAccount.vk_id,
        vk_access_token: null,
      },
      true,
    )

    if (tokens instanceof APIError) {
      return new APIError(HttpStatus.INTERNAL_SERVER_ERROR)
    }

    return { ...createdAccount, ...tokens! }
  }

  /**
   * Авторизация пользователя по логину
   * @param {String} username Логин аккаунта
   * @param {String} password Пароль от аккаунта
   * @returns {AuthenticatedUser} Аккаунт пользователя с токеном доступа
   */
  async getAuthenticatedUserByLogin(
    username: string,
    password: string,
  ): Promise<AuthenticatedUser | APIError> {
    const account = await this.account.getAccount({
      username: username.trim(),
    })

    if (account instanceof APIError) {
      return account
    }

    return await this.verifyAccount(account, password)
  }

  /**
   * Авторизация аккаунта по паролю
   * @param {Account} account Аккаунт пользователя
   * @param {String} password Пароль от аккаунта
   * @returns {AuthenticatedUser} Аккаунт пользователя с токеном доступа
   */
  async verifyAccount(
    account: Account,
    password: string,
  ): Promise<AuthenticatedUser | APIError> {
    const verified = await argon2.verify(account.password, password)

    if (!verified) {
      return new APIError(HttpStatus.BAD_REQUEST, 'Некорректные данные')
    }

    account.password = undefined!

    const tokens = await this.token.grant({
      userid: account.id,
      username: account.username,
      email: account.email,
      vk_id: account.vk_id,
      vk_avatar: account.vk_avatar,
      vk_access_token: null,
    })

    if (tokens instanceof APIError) {
      return new APIError(HttpStatus.BAD_REQUEST, 'Некорректные данные')
    }

    return { ...account, ...tokens }
  }

  /**
   * Проверка пользователя VK ID
   * @description
   * * Обновляет пользователя в случае наличия в базе
   * * Создаёт в случае отсутствия
   * @param {VKIDUser} vkIdUser Пользователь VK ID
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  async verifyVKIDUser(
    vkIdUser: VKIDUser,
  ): Promise<AuthenticatedUser | APIError> {
    const isExistUser = await this.account.getAccount({
      vk_id: String(vkIdUser.id),
    })

    if (isExistUser instanceof APIError) {
      const username = `id${vkIdUser.id}`

      const password = generator.generate({
        length: 8,
        strict: true,
        numbers: true,
        excludeSimilarCharacters: true,
      })

      const hashedPassword = await argon2.hash(password)

      const user = await this.account.createAccount({
        data: {
          username,
          password: hashedPassword,
          first_name: vkIdUser.first_name,
          last_name: vkIdUser.last_name,
          birthday: vkIdUser.bdate
            ? new Date(vkIdUser.bdate).toISOString()
            : undefined,
          vk_id: String(vkIdUser.id),
          vk_avatar: vkIdUser.photo_200,
          roles: {
            set: [Role.Public],
          },
        },
      })

      if (user instanceof APIError) {
        return user
      }

      const tokens = await this.token.grant(
        {
          userid: user!.id,
          username: user!.username,
          email: null,
          vk_access_token: vkIdUser.access_token ?? null,
          vk_id: String(user!.vk_id),
          vk_avatar: user!.vk_avatar,
        },
        true,
      )

      return { ...user!, ...tokens! }
    }

    const user = await this.account.updateAccount(
      {
        vk_avatar: {
          set: vkIdUser.photo_200,
        },
      },
      {
        id: isExistUser.id,
      },
    )

    if (user instanceof APIError) {
      return user
    }

    const tokens = await this.token.grant(
      {
        email: null,
        username: user!.username,
        userid: user!.id,
        vk_access_token: vkIdUser.access_token!,
        vk_avatar: vkIdUser.photo_200!,
        vk_id: String(vkIdUser.id),
      },
      true,
    )

    return { ...user!, ...tokens! }
  }

  /**
   * Логаут пользователя
   * @param {LogoutDto} dto Данные пользователя
   * @returns {Boolean} Результат логаута
   */
  async logout({
    user_id,
    refresh_token,
  }: LogoutDto): Promise<Boolean | APIError> {
    const result = await this.token.logout(user_id, refresh_token)

    if (result instanceof APIError) {
      return new APIError(HttpStatus.BAD_REQUEST, result.message)
    }

    return Boolean(result)
  }

  /**
   * Обновление токена аккаунта
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Tokens} Обновлённые токены
   */
  async refreshToken(user: AuthenticatedUser): Promise<Tokens | APIError> {
    const result = await this.token.logout(user.id, user.refresh_token)

    if (result instanceof APIError) {
      return result
    }

    return await this.token.grant(
      {
        email: user.email,
        userid: user.id,
        username: user.username,
        vk_avatar: user.vk_avatar,
        vk_id: user.vk_id,
        vk_access_token: null,
      },
      true,
    )
  }

  /**
   * Очистка токенов аккаунта
   * @param {string} user_id Идентификатор аккаунта
   * @returns {boolean} Результат очистки
   */
  async clearRefreshTokens(user_id: string): Promise<boolean> {
    return await this.token.clear(user_id)
  }

  /**
   * Создание авторизационных кук
   * @param {Tokens} tokens Пара авторизационных токенов
   * @returns {Cookies[]} Массив созданных кук
   */
  cookiesWithTokens(tokens: Tokens): Cookies[] {
    const accessTokenExp = this.decodeTokenExpiration(
      this.config.gett('ACCESS_TOKEN_EXPIRATION'),
    )

    const refreshTokenExp = this.decodeTokenExpiration(
      this.config.gett('REFRESH_TOKEN_EXPIRATION'),
    )

    const authenticationExpires = moment()
      .add(
        accessTokenExp.v as moment.DurationInputArg1,
        accessTokenExp.t as moment.DurationInputArg2,
      )
      .toString()

    const refreshExpires = moment()
      .add(
        refreshTokenExp.v as moment.DurationInputArg1,
        refreshTokenExp.t as moment.DurationInputArg2,
      )
      .toString()

    return [
      new Cookies({
        domain: this.cookieDomain,
        key: 'Authentication',
        path: '/',
        value: tokens.access_token,
        expires: authenticationExpires,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      }),
      new Cookies({
        domain: this.cookieDomain,
        key: 'Refresh',
        path: '/auth/refresh',
        value: tokens.refresh_token,
        expires: refreshExpires,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      }),
    ]
  }

  /**
   * Получение кук для выхода из системы
   * @returns {Cookies[]} Массив кук для выхода из системы
   */
  logoutCookies(): Cookies[] {
    return [
      new Cookies({
        domain: this.cookieDomain,
        key: 'Authentication',
        path: '/',
        value: '',
        maxAge: 0,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      }),
      new Cookies({
        domain: this.cookieDomain,
        key: 'Refresh',
        path: '/auth/refresh',
        value: '',
        maxAge: 0,
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      }),
    ]
  }

  /**
   * Декодирование срока просрочки токена
   * @param {string} exp Срок просрочки
   * @returns Декодированный срок
   */
  private decodeTokenExpiration(exp: string): {
    t: string
    v: number
  } {
    return { t: exp.slice(-1), v: Number(exp.slice(0, exp.length - 1)) }
  }
}
