import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { AccountRepository } from '@/account/account.repository'
import { VKIDService } from '@/vkid/vkid.service'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

import { EmailStrategy } from './strategies/email.strategy'
import { LoginStrategy } from './strategies/login.strategy'
import { VKIDStrategy } from './strategies/vkid.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'

/**
 * Модуль авторизации в приложении
 * @description Включает в себя:
 * @description HTTP-контроллер авторизации;
 * @description Сервис авторизации;
 * @description Стратегии авторизации по email, login и JWT-токену.
 */
@Module({
  imports: [HttpModule],
  providers: [
    AuthService,
    AccountRepository,
    VKIDService,
    EmailStrategy,
    LoginStrategy,
    JwtStrategy,
    VKIDStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
