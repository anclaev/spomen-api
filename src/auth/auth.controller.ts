import {
  Body,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common'

import { Account } from '@prisma/client'
import { Response } from 'express'

import { AuthenticatedUser } from '@interfaces/user'
import { VKIDUser } from '@interfaces/vkid'

import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

import { AuthService } from './auth.service'

import { LocalLoginGuard } from './guards/local-login.guard'
import { LocalEmailGuard } from './guards/local-email.guard'
import { VKIDGuard } from './guards/vkid.guard'

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
   * @returns {Account} Созданный аккаунт
   */
  @Post('sign-up')
  @HttpCode(200)
  async signUp(@Body() dto: SignUpDto): Promise<Account> {
    const createdAccount = await this.auth.signUp(dto)

    if (!createdAccount) {
      throw new ConflictException('Not unique login')
    }

    return createdAccount
  }

  /**
   * Вход в систему по логину
   * @param {AuthenticatedUser} user Авторизованный пользователь
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  @Post('sign-in')
  @HttpCode(200)
  @UseGuards(LocalLoginGuard)
  signIn(
    @UseUser() user: AuthenticatedUser,
    @Res() res: Response,
  ): Response<AuthenticatedUser> {
    res.setHeader(
      'Set-Cookie',
      this.auth.getCookiesWithTokens(user.access_token, user.refresh_token),
    )

    return res.send({ ...user, access_token: '', refresh_token: '' })
  }

  /**
   * Вход в систему по почте
   * @param {AuthenticatedUser} user Авторизованный пользователь
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  @Post('sign-in/email')
  @HttpCode(200)
  @UseGuards(LocalEmailGuard)
  signInByEmail(
    @UseUser() user: AuthenticatedUser,
    @Res() res: Response,
  ): Response<AuthenticatedUser> {
    res.setHeader(
      'Set-Cookie',
      this.auth.getCookiesWithTokens(user.access_token, user.refresh_token),
    )

    return res.send({ ...user, access_token: '', refresh_token: '' })
  }

  /**
   * Вход в систему через VKID
   * @param {VKID_EXCHANGE_TOKEN_RESPONSE} user Access-токен VKID с данными пользователя
   * @returns {unknown} Пользователь системы
   */
  @Post('vkid')
  @HttpCode(200)
  @UseGuards(VKIDGuard)
  async signInByVKID(
    @UseUser() vkIdUser: VKIDUser,
    @Res() res: Response,
  ): Promise<Response<AuthenticatedUser>> {
    const user = await this.auth.verifyVKIDUser(vkIdUser)

    res.setHeader(
      'Set-Cookie',
      this.auth.getCookiesWithTokens(user.access_token, user.refresh_token),
    )

    return res.send({ ...user, access_token: '', refresh_token: '' })
  }

  @Post('logout')
  @HttpCode(200)
  @UseAuth()
  async logout(@Res() res: Response) {
    const cookies = this.auth.clearCookies()

    res.setHeader('Set-Cookie', cookies)

    res.send()
  }
}
