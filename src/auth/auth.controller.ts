import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common'

import { Response } from 'express'

import { AuthenticatedUser, User } from '@interfaces/user'
import { VKIDUser } from '@interfaces/vkid'

import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

import { AuthService } from './auth.service'

import { LocalGuard } from './guards/local.guard'
import { VKIDGuard } from './guards/vkid.guard'

import { serializeUser } from '@utils/serialize'
import { injectCookies } from '@utils/cookies'

import { SignUpDto } from './dto/sign-up.dto'

/**
 * HTTP-контроллер авторизации
 */
@Controller('auth')
export class AuthController {
  /**
   * Конструктор контроллера авторизации
   * @param {AuthService} auth Сервис авторизации
   */
  constructor(private readonly auth: AuthService) {}

  /**
   * Получение текущего авторизованного пользователя
   * @param {AuthenticatedUser} user
   * @returns {AuthenticatedUser} Аккаунт пользователя
   */
  @Get()
  @UseAuth()
  user(@UseUser() user: AuthenticatedUser): AuthenticatedUser {
    return user
  }

  /**
   * Регистрация аккаунта
   * @param {SignUpDto} dto Регистрационные данные
   * @param {Response} res Объект ответа
   * @returns {AuthenticatedUser} Созданный аккаунт
   */
  @Post('sign-up')
  @HttpCode(200)
  async signUp(
    @Body() dto: SignUpDto,
    @Res() res: Response,
  ): Promise<Response<AuthenticatedUser>> {
    const account = await this.auth.signUp(dto)

    const cookies = this.auth.cookiesWithTokens({
      access_token: account.access_token,
      refresh_token: account.refresh_token,
    })

    return injectCookies(res, cookies).send(
      serializeUser<AuthenticatedUser, AuthenticatedUser>(account),
    )
  }

  /**
   * Вход в систему по логину
   * @param {AuthenticatedUser} user Авторизованный пользователь
   * @param {Response} res Объект ответа
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  @Post('token')
  @HttpCode(200)
  @UseGuards(LocalGuard)
  signIn(
    @UseUser() user: AuthenticatedUser,
    @Res() res: Response,
  ): Response<AuthenticatedUser> {
    const cookies = this.auth.cookiesWithTokens({
      access_token: user.access_token,
      refresh_token: user.refresh_token,
    })

    return injectCookies(res, cookies).send(
      serializeUser<AuthenticatedUser, AuthenticatedUser>(user),
    )
  }

  /**
   * Вход в систему через VKID
   * @param {VKIDUser} vkIdUser Access-токен VKID с данными пользователя
   * @param {Response} res Объект ответа
   * @returns {AuthenticatedUser} Пользователь системы
   */
  @Post('vkid')
  @HttpCode(200)
  @UseGuards(VKIDGuard)
  async signInByVKID(
    @UseUser() vkIdUser: VKIDUser,
    @Res() res: Response,
  ): Promise<Response<AuthenticatedUser>> {
    const user = await this.auth.verifyVKIDUser(vkIdUser)

    const cookies = this.auth.cookiesWithTokens({
      access_token: user.access_token,
      refresh_token: user.refresh_token,
    })

    return injectCookies(res, cookies).send(
      serializeUser<AuthenticatedUser, AuthenticatedUser>(user),
    )
  }

  @Post('refresh')
  @HttpCode(200)
  @UseAuth()
  async refresh() {
    // Логика обновления токена
  }

  /**
   * Логаут из приложения
   * @param {AuthenticatedUser} user Авторизованный пользователь
   * @param {Response} res Объект ответа
   * @returns {Boolean} Результат логаута
   */
  @Post('logout')
  @HttpCode(200)
  @UseAuth()
  async logout(
    @UseUser() user: AuthenticatedUser,
    @Res() res: Response,
  ): Promise<Response<Boolean>> {
    const completed = await this.auth.logout({
      user_id: user.id,
      refresh_token: user.refresh_token,
    })

    const cookies = this.auth.logoutCookies()

    return injectCookies(res, cookies).send(completed)
  }

  /**
   * Очистка токенов аккаунта
   * @param {AuthenticatdUser} user Текущий пользователь
   * @returns {Boolean} Результат очистки
   */
  @Post('clear')
  @HttpCode(200)
  @UseAuth()
  async clearMe(@UseUser() user: AuthenticatedUser): Promise<boolean | null> {
    return await this.auth.clear(user.id)
  }
}
