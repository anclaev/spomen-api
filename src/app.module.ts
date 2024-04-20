import { CqrsModule } from '@nestjs/cqrs'
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { DatabaseModule } from '@core/database'
import { ConfigModule } from '@core/config'

@Module({
  imports: [ConfigModule, DatabaseModule, CqrsModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
