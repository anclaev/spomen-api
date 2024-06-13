import {
  Body,
  ClassSerializerInterceptor,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'

import { Account } from '@prisma/client'

import { AuthenticatedUser, User } from '@interfaces/user'

import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

import { VKIDService } from '@core/vkid/vkid.service'
import { AuthService } from './auth.service'

import { LocalLoginGuard } from './guards/local-login.guard'
import { LocalEmailGuard } from './guards/local-email.guard'

import { SignUpDto } from './dto/sign-up.dto'

/**
 * HTTP-контроллер авторизации
 */
@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  /**
   * Конструктор контроллера авторизации
   * @param {AuthService} auth Сервис авторизации
   */
  constructor(
    private readonly auth: AuthService,
    private readonly vkid: VKIDService,
  ) {}

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
  signIn(@UseUser() user: AuthenticatedUser): AuthenticatedUser {
    return user
  }

  /**
   * Вход в систему по почте
   * @param {AuthenticatedUser} user Авторизованный пользователь
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  @Post('sign-in/email')
  @HttpCode(200)
  @UseGuards(LocalEmailGuard)
  signInByEmail(@UseUser() user: AuthenticatedUser): AuthenticatedUser {
    return user
  }

  // Только для разработки
  // TODO: Разработать гард по ролям и повесить доступ на роль админа
  @Post('exchange-token')
  exchangeToken(
    @Body() { silent_token, uuid }: { silent_token: string; uuid: string },
  ) {
    return this.vkid.exchangeToken({
      silent_token,
      uuid,
    })
  }
}
