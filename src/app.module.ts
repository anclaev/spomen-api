import { Module } from '@nestjs/common'

import { AccountModule } from '@/account/account.module'
import { VKIDModule } from './vkid/vkid.module'
import { AuthModule } from '@/auth/auth.module'
import { CoreModule } from '@core/core.module'

/**
 * Корневой модуль приложения
 */
@Module({
  imports: [CoreModule, VKIDModule, AccountModule, AuthModule],
  providers: [],
})
export class AppModule {}
