import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { AccountRepository } from '@/account/account.repository'
import { VKIDService } from '@/vk-id/vk-id.service'

import { AuthController } from './auth.controller'
import { TokenService } from './token.service'
import { AuthService } from './auth.service'

import { RefreshStrategy } from './strategies/refresh.strategy'
import { LocalStrategy } from './strategies/local.strategy'
import { VKIDStrategy } from './strategies/vkid.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'

/**
 * Модуль авторизации в приложении
 * @description Включает в себя:
 * @description HTTP-контроллер авторизации;
 * @description Сервис авторизации;
 * @description Стратегии авторизации.
 */
@Module({
  imports: [HttpModule],
  providers: [
    AuthService,
    TokenService,
    AccountRepository,
    VKIDService,
    LocalStrategy,
    JwtStrategy,
    VKIDStrategy,
    RefreshStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
