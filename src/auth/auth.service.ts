import { BadRequestException, Injectable } from '@nestjs/common'
import { Account, Role } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'

import generator from 'generate-password-ts'
import * as argon2 from 'argon2'

import { TokenPayload } from '@interfaces/token-payload'
import { AuthenticatedUser } from '@interfaces/user'
import { VKIDUser } from '@interfaces/vkid'

import { AccountRepository } from '@/account/account.repository'

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
   */
  constructor(
    private readonly account: AccountRepository,
    private readonly jwt: JwtService,
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
   * @param {String} login Логин аккаунта
   * @param {String} password Пароль от аккаунта
   * @returns {AuthenticatedUser} Аккаунт пользователя с токеном доступа
   */
  async getAuthenticatedUserByLogin(
    login: string,
    password: string,
  ): Promise<AuthenticatedUser> {
    const account = await this.account.findOne({
      where: { login: login.trim() },
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
  async generateToken(payload: TokenPayload): Promise<string> {
    return await this.jwt.signAsync(payload)
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

    const access_token = await this.generateToken({
      user_id: account.id,
      login: account.login,
      email: account.email,
      vk_id: account.id,
      vk_avatar: account.vkAvatar,
      vk_access_token: null,
    })

    return { ...account, access_token }
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
        vkId: String(vkIdUser.id),
      },
    })

    if (!isAlreadyExistsUser) {
      const login = `id${vkIdUser.id}`

      const password = generator.generate({
        length: 8,
        strict: true,
        numbers: true,
        excludeSimilarCharacters: true,
      })

      const hashedPassword = await argon2.hash(password)

      const user = await this.account.create({
        data: {
          login,
          password: hashedPassword,
          name: vkIdUser.first_name,
          surname: vkIdUser.last_name,
          birthday: vkIdUser.bdate
            ? new Date(vkIdUser.bdate).toISOString()
            : undefined,
          vkId: String(vkIdUser.id),
          vkAvatar: vkIdUser.photo_200,
          roles: {
            set: [Role.Public],
          },
        },
      })

      const access_token = await this.generateToken({
        user_id: user!.id,
        email: null,
        login: user!.login,
        vk_access_token: vkIdUser.access_token ?? null,
        vk_id: String(user!.vkId),
        vk_avatar: user!.vkAvatar,
      })

      user!.password = password

      return { ...user!, access_token }
    }

    const user = await this.account.update({
      where: {
        id: isAlreadyExistsUser.id,
      },
      data: {
        vkAvatar: {
          set: vkIdUser.photo_200,
        },
      },
    })

    const access_token = await this.generateToken({
      email: null,
      login: user!.login,
      user_id: user!.id,
      vk_access_token: vkIdUser.access_token!,
      vk_avatar: vkIdUser.photo_200!,
      vk_id: String(vkIdUser.id),
    })

    return { ...user!, access_token }
  }
}
