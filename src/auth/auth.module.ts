import { Module } from '@nestjs/common'

import { AccountRepository } from '@/account/account.repository'

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
  providers: [
    AuthService,
    AccountRepository,
    EmailStrategy,
    LoginStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
