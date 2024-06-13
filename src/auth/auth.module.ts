import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { AccountRepository } from '@/account/account.repository'
import { VKIDService } from '@core/vkid/vkid.service'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

import { EmailStrategy } from './strategies/email.strategy'
import { LoginStrategy } from './strategies/login.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'

/**
 * Модуль авторизации в приложении
 * @description Включает в себя:
 * @description HTTP-контроллер авторизации;
 * @description Сервис авторизации;
 * @description Стратегии авторизации по email, login и JWT-токену.
 */
@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [
    VKIDService,
    AuthService,
    AccountRepository,
    EmailStrategy,
    LoginStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
