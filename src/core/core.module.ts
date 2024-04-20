import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Global, Logger, Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from 'nestjs-prisma'

import { ConfigService } from './config/config.service'
import validationSchema from './config/config.schema'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: `.env.${process.env['NODE_ENV'] ?? 'local'}`,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
      validationSchema,
    }),
    PrismaModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        isGlobal: true,
        prismaOptions: {
          datasources: {
            db: {
              url: config.gett<string>('DATABASE_URL'),
            },
          },
        },
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (config: ConfigService) => ({
        playground: !config.isProduction,
        autoSchemaFile: true,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [Logger, ConfigService],
  exports: [Logger, ConfigService],
})
export class CoreModule {}
