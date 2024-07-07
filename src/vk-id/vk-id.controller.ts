import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common'

import { Role } from '@prisma/client'
import { Response } from 'express'

// Сервисы
import { AuthService } from '@/auth/auth.service'
import { VKIDService } from './vk-id.service'

// Декораторы
import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

// Гарды
import { VKIDGuard } from '@/auth/guards/vkid.guard'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { VKIDUser } from '@interfaces/vk-id'

// Утилиты
import { serializeUser } from '@utils/serialize'
import { APIError } from '@interfaces/api-error'
import { injectCookies } from '@utils/cookies'

/**
 * Контроллер VKID
 */
@Controller('vk-id')
export class VKIDController {
  /**
   * Конструктор контроллера VKID
   * @param {VKIDService} vkid Сервис работы с VKID
   * @param {AuthService} auth Сервис авторизации
   */
  constructor(
    private readonly vkid: VKIDService,
    private readonly auth: AuthService,
  ) {}

  /**
   * Получение аккаунта VK по ID
   * @param {string} id ID аккаунта
   * @returns {VKIDUser} Аккаунт VK
   */
  @Get(':id')
  @UseAuth([Role.Administrator])
  async getVKIDUserById(
    @Param('id') id: string,
    @Body() { access_token }: { access_token: string },
  ): Promise<VKIDUser> {
    const result = await this.vkid.getVKIDUsers({
      user_ids: [id],
      fields: [
        'first_name',
        'last_name',
        'photo_200',
        'domain',
        'screen_name',
        'bdate',
      ],
      access_token,
    })

    this.catchError(result)

    const users = result as VKIDUser[]

    if (users.length == 0) {
      throw new HttpException('Аккаунт не найден', HttpStatus.NOT_FOUND)
    }

    return users[0]
  }

  /**
   * Обмен токенов VKID
   * @param {AuthenticatedUser} user Авторизованный пользователь
   * @param {Response} res Объект ответа запроса
   * @returns {AuthenticatedUser} Авторизованный пользователь с куками доступа
   */
  @Post('exchange-token')
  @HttpCode(200)
  @UseGuards(VKIDGuard)
  exchangeToken(
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
