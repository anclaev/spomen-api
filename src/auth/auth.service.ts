import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common'

import { Account, Role } from '@prisma/client'
import generator from 'generate-password-ts'
import * as moment from 'moment'
import * as argon2 from 'argon2'

import { AccountRepository } from '@/account/account.repository'
import { TokenService } from './token.service'
import { ConfigService } from '@core/config'

import { Cookies } from '@utils/cookies'

import { AuthenticatedUser } from '@interfaces/user'
import { VKIDUser } from '@interfaces/vk-id'
import { Tokens } from '@interfaces/tokens'

import { RefreshTokensDto } from './dto/refresh-tokens.dto'
import { SignUpDto } from './dto/sign-up.dto'
import { LogoutDto } from './dto/logout.dto'

/**
 * Сервис авторизации
 */
@Injectable()
export class AuthService {
  private cookieDomain: string

  /**
   * Конструктор сервиса авторизации
   * @param {AccountRepository} account Репозиторий аккаунта
   * @param {JwtService} jwt Сервис работы с JWT-токенами
   * @param {ConfigService} config Сервис работы с конфигурацией
   */
  constructor(
    private readonly account: AccountRepository,
    private readonly config: ConfigService,
    private readonly token: TokenService,
  ) {
    this.cookieDomain =
      process.env.NODE_ENV !== 'local'
        ? this.config.gett('DOMAIN')
        : 'localhost'
  }

  /**
   * Регистрация в приложении
   * @param {SignUpDto} dto Данные для авторизации
   * @returns {Account | null} Созданный аккаунт
   */
  async signUp(dto: SignUpDto): Promise<AuthenticatedUser> {
    const password = await argon2.hash(dto.password)

    const createdAccount = await this.account.create({
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

    if (!createdAccount) {
      throw new ConflictException('Not unique login')
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
  ): Promise<AuthenticatedUser> {
    const account = await this.account.findOne({
      where: { username: username.trim() },
    })

    return await this.verifyAccount(account, password)
  }

  /**
   * Авторизация пользователя по почте
   * @param {String} email Почта аккаунта
   * @param {String} password Пароль от аккаунта
   * @returns {AuthenticatedUser} Аккаунт пользователя с токеном доступа
   */
  async getAuthenticatedUserByEmail(
    email: string,
    password: string,
  ): Promise<AuthenticatedUser> {
    const account = await this.account.findOne({
      where: { email: email.trim() },
    })

    return await this.verifyAccount(account, password)
  }

  /**
   * Авторизация аккаунта по паролю
   * @param {Account} account Аккаунт пользователя
   * @param {String} password Пароль от аккаунта
   * @returns {AuthenticatedUser} Аккаунт пользователя с токеном доступа
   */
  async verifyAccount(
    account: Account | null,
    password: string,
  ): Promise<AuthenticatedUser> {
    if (!account) {
      throw new BadRequestException('Wrong credentials')
    }

    const verifed = await argon2.verify(account.password, password)

    if (!verifed) {
      throw new BadRequestException('Wrong credentials')
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

    if (!tokens) {
      throw new BadRequestException()
    }

    return { ...account, ...tokens }
  }

  /**
   * Проверка пользователя VKID
   * @description Обновляет пользователя в случае наличия в базе;
   * @description Создаёт в случае отсутствия.
   * @param {VKIDUser} vkIdUser Пользователь VKID
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  async verifyVKIDUser(vkIdUser: VKIDUser): Promise<AuthenticatedUser> {
    const isAlreadyExistsUser = await this.account.findOne({
      where: {
        vk_id: String(vkIdUser.id),
      },
    })

    if (!isAlreadyExistsUser) {
      const username = `id${vkIdUser.id}`

      const password = generator.generate({
        length: 8,
        strict: true,
        numbers: true,
        excludeSimilarCharacters: true,
      })

      const hashedPassword = await argon2.hash(password)

      const user = await this.account.create({
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

      const tokens = await this.token.grant({
        userid: user!.id,
        username: user!.username,
        email: null,
        vk_access_token: vkIdUser.access_token ?? null,
        vk_id: String(user!.vk_id),
        vk_avatar: user!.vk_avatar,
      })

      if (!tokens) {
        throw new BadRequestException()
      }

      user!.password = password

      return { ...user!, ...tokens }
    }

    const user = await this.account.update({
      where: {
        id: isAlreadyExistsUser.id,
      },
      data: {
        vk_avatar: {
          set: vkIdUser.photo_200,
        },
      },
    })

    const tokens = await this.token.grant({
      email: null,
      username: user!.username,
      userid: user!.id,
      vk_access_token: vkIdUser.access_token!,
      vk_avatar: vkIdUser.photo_200!,
      vk_id: String(vkIdUser.id),
    })

    if (!tokens) {
      throw new BadRequestException()
    }

    return { ...user!, ...tokens }
  }

  /**
   * Логаут пользователя
   * @param {LogoutDto} dto Данные пользователя
   * @returns {Boolean} Результат логаута
   */
  async logout({ user_id, refresh_token }: LogoutDto): Promise<Boolean> {
    const completed = await this.token.logout(user_id, refresh_token)

    if (completed === null) {
      throw new BadRequestException()
    }

    return completed
  }

  async refreshTokens(user: AuthenticatedUser): Promise<Tokens> {
    await this.token.logout(user.id, user.refresh_token)

    const tokens = await this.token.grant(
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

    return tokens!
  }

  async refreshClear(user_id: string): Promise<boolean | null> {
    return await this.token.clear(user_id)
  }

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

  private decodeTokenExpiration(exp: string): {
    t: string
    v: number
  } {
    return { t: exp.slice(-1), v: Number(exp.slice(0, exp.length - 1)) }
  }
}
