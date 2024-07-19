import { Global, Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'

// Модули
import { AccountModule } from '@/account/account.module'

// Сервисы
import { VKIDService } from '@/vk-id/vk-id.service'
import { TokenService } from './token.service'
import { AuthService } from './auth.service'

// Контроллеры
import { AuthController } from './auth.controller'

// Стратегии
import { RefreshStrategy } from './strategies/refresh.strategy'
import { LocalStrategy } from './strategies/local.strategy'
import { VKIDStrategy } from './strategies/vk-id.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'

/**
 * Модуль авторизации в приложении
 * @description Экспортирует:
 * * Сервис авторизации
 */

@Global()
@Module({
  imports: [HttpModule, AccountModule],
  providers: [
    AuthService,
    TokenService,
    VKIDService,
    LocalStrategy,
    JwtStrategy,
    RefreshStrategy,
    VKIDStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
