import { BadRequestException, Injectable } from '@nestjs/common'
import { Account, Role } from '@prisma/client'
import generator from 'generate-password-ts'
import { JwtService } from '@nestjs/jwt'
import * as argon2 from 'argon2'

import { AccountRepository } from '@/account/account.repository'
import { ConfigService } from '@core/config'

import { TokenPayload } from '@interfaces/token-payload'
import { AuthenticatedUser } from '@interfaces/user'
import { VKIDUser } from '@interfaces/vkid'

import { SignUpDto } from './dto/sign-up.dto'

/**
 * Сервис авторизации
 */
@Injectable()
export class AuthService {
  /**
   * Конструктор сервиса авторизации
   * @param {AccountRepository} account Репозиторий аккаунта
   * @param {JwtService} jwt Сервис работы с JWT-токенами
   * @param {ConfigService} config Сервис работы с конфигурацией
   */
  constructor(
    private readonly account: AccountRepository,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  /**
   * Регистрация в приложении
   * @param {SignUpDto} dto Данные для авторизации
   * @returns {Account | null} Созданный аккаунт
   */
  async signUp(dto: SignUpDto): Promise<Account | null> {
    const password = await argon2.hash(dto.password)

    return await this.account.create({
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
   * Создание токена доступа
   * @param {TokenPayload} payload Авторизационные данные
   * @returns {String} Подписанный JWT-токен
   */
  async generateToken(
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

    const token_payload = {
      userid: account.id,
      username: account.username,
      email: account.email,
      vk_id: account.id,
      vk_avatar: account.vk_avatar,
      vk_access_token: null,
    }

    const access_token = await this.generateToken(token_payload, 'access')
    const refresh_token = await this.generateToken(token_payload, 'refresh')

    return { ...account, access_token, refresh_token, token_type: 'bearer' }
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

      const token_payload = {
        userid: user!.id,
        username: user!.username,
        email: null,
        vk_access_token: vkIdUser.access_token ?? null,
        vk_id: String(user!.vk_id),
        vk_avatar: user!.vk_avatar,
      }

      const access_token = await this.generateToken(token_payload, 'access')
      const refresh_token = await this.generateToken(token_payload, 'refresh')

      user!.password = password

      return { ...user!, access_token, refresh_token, token_type: 'bearer' }
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

    const token_payload = {
      email: null,
      username: user!.username,
      userid: user!.id,
      vk_access_token: vkIdUser.access_token!,
      vk_avatar: vkIdUser.photo_200!,
      vk_id: String(vkIdUser.id),
    }

    const access_token = await this.generateToken(token_payload, 'access')
    const refresh_token = await this.generateToken(token_payload, 'refresh')

    return { ...user!, access_token, refresh_token, token_type: 'bearer' }
  }
}
