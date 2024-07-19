import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
  HttpException,
} from '@nestjs/common'

import { Response } from 'express'

// Декораторы
import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

// Гарды
import { RefreshGuard } from './guards/refresh.guard'
import { LocalGuard } from './guards/local.guard'

// Сервисы
import { AuthService } from './auth.service'

// Утилиты
import { serializeUser } from '@utils/serialize'
import { injectCookies } from '@utils/cookies'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'
import { Tokens } from '@interfaces/tokens'

// DTO
import { SignUpDto } from './dto/sign-up.dto'

/**
 * Контроллер авторизации
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
   * @param {Response} res Объект ответа запроса
   * @returns {AuthenticatedUser} Созданный аккаунт
   */
  @Post('sign-up')
  @HttpCode(200)
  async signUp(
    @Body() dto: SignUpDto,
    @Res() res: Response,
  ): Promise<Response<AuthenticatedUser>> {
    const result = await this.auth.signUp(dto)

    this.catchError(result)

    const account: AuthenticatedUser = result as AuthenticatedUser

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
   * Логаут из приложения
   * @param {AuthenticatedUser} user Авторизованный пользователь
   * @param {Response} res Объект ответа
   * @returns {boolean} Результат логаута
   */
  @Post('logout')
  @HttpCode(200)
  @UseAuth()
  async logout(
    @UseUser() user: AuthenticatedUser,
    @Res() res: Response,
  ): Promise<Response<boolean>> {
    const result = await this.auth.logout({
      user_id: user.id,
      refresh_token: user.refresh_token,
    })

    this.catchError(result)

    const cookies = this.auth.logoutCookies()

    return injectCookies(res, cookies).send(result)
  }

  /**
   * Обновление токенов аккаунта
   * @param {AuthenticatdUser} user Текущий пользователь
   * @param {Response} res Объект ответа запроса
   * @returns {Tokens} Новая пара токенов
   */
  @Post('refresh')
  @HttpCode(200)
  @UseGuards(RefreshGuard)
  async refresh(
    @UseUser() user: AuthenticatedUser,
    @Res() res: Response,
  ): Promise<Response<Tokens>> {
    const result = await this.auth.refreshToken(user)

    this.catchError(result)

    const refreshedTokens = result as Tokens

    const cookies = this.auth.cookiesWithTokens(refreshedTokens)

    return injectCookies(res, cookies).send(refreshedTokens)
  }

  /**
   * Очистка токенов обновления аккаунта
   * @param {AuthenticatdUser} user Текущий пользователь
   * @returns {Boolean} Результат очистки
   */
  @Post('refresh/clear')
  @HttpCode(200)
  @UseAuth()
  async clearMe(@UseUser() user: AuthenticatedUser): Promise<boolean | null> {
    return await this.auth.clearRefreshTokens(user.id)
  }

  /**
   * Обработчик ошибок
   * @param {unknown | APIError} data Результат запроса
   * @returns {unknown} Обработанный запрос
   */
  private catchError<T>(data: T | APIError): T {
    if (data instanceof APIError) {
      throw new HttpException(data.message, data.status)
    }

    return data
  }
}
