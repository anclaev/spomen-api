import { Global, Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'

import { ConfigService } from '@core/config'

@Global()
@Module({
  imports: [
    PrismaModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        prismaOptions: {
          datasources: {
            db: {
              url: config.gett<string>('DATABASE_URL'),
            },
          },
        },
      }),
      inject: [ConfigService],
      isGlobal: true,
    }),
  ],
})
export class DatabaseModule {}
