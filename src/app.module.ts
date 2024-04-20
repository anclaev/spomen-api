import { CqrsModule } from '@nestjs/cqrs'
import { Module } from '@nestjs/common'

import { CoreModule } from '@core/core.module'

import { AccountModule } from './account/account.module'

@Module({
  imports: [CoreModule, CqrsModule.forRoot(), AccountModule],
})
export class AppModule {}
