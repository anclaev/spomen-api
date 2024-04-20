import { ConfigModule as RootModule } from '@nestjs/config'
import { Logger, Module } from '@nestjs/common'

import { ConfigService } from './config.service'
import validationSchema from './config.schema'

@Module({
  imports: [
    RootModule.forRoot({
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
  providers: [Logger, ConfigService],
  exports: [Logger, ConfigService],
})
export class ConfigModule {}
