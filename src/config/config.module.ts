import { ConfigModule as RootConfigModule } from '@nestjs/config'
import { Global, Module } from '@nestjs/common'

import { ConfigController } from '@/config/config.controller'
import { ConfigService } from '@/config/config.service'
import { AppConfigService } from './app-config.service'
import validationSchema from '@/config/config.schema'

@Global()
@Module({
  imports: [
    RootConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.env.${process.env['NODE_ENV'] ?? 'local'}`,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
      validationSchema,
    }),
  ],
  controllers: [ConfigController],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
