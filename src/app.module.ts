import { Module } from '@nestjs/common'

import { CoreModule } from '@core/core.module'

import { AccountModule } from './account/account.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [CoreModule, AccountModule, AuthModule],
})
export class AppModule {}
