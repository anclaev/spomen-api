import { ConfigModule as RootModule } from '@nestjs/config'
import { Module } from '@nestjs/common'

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
})
export class ConfigModule {}
