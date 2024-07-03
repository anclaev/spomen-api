import { PrismaHealthIndicator, TerminusModule } from '@nestjs/terminus'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { PrismaModule, PrismaService } from 'nestjs-prisma'
import { Global, Logger, Module } from '@nestjs/common'
import { NestjsFormDataModule } from 'nestjs-form-data'
import { GraphQLModule } from '@nestjs/graphql'
import { NestMinioModule } from 'nestjs-minio'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'

import { ConfigService } from './config/config.service'
import validationSchema from './config/config.schema'

/**
 * Системный модуль приложения
 * @description Предоставляет ключевые модули и логгер.
 * @description Включает в себя:
 * @description модуль HTTP Axios;
 * @description модуль конфигурации;
 * @description модуль работы с файлами;
 * @description модуль работы с базой данных;
 * @description модуль работы с S3;
 * @description модуль сервера GraphQL;
 * @description модуль работы с JWT-токенами;
 * @description модуль healthcheck.
 */
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
    NestjsFormDataModule.config({
      isGlobal: true,
      limits: {
        files: 10,
      },
    }),
    NestMinioModule.registerAsync({
      isGlobal: true,
      useFactory: (config: ConfigService) => ({
        accessKey: config.gett('MINIO_ACCESS_KEY'),
        secretKey: config.gett('MINIO_SECRET_KEY'),
        endPoint: config.gett('MINIO_HOST'),
        port: Number(config.gett('MINIO_PORT')),
        useSSL: false,
      }),
      inject: [ConfigService],
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
    JwtModule.registerAsync({
      global: true,
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.gett('ACCESS_TOKEN_SECRET'),
        signOptions: {
          issuer: 'Spomen API',
          expiresIn: String(config.gett('ACCESS_TOKEN_EXPIRATION')),
        },
      }),
      inject: [ConfigService],
    }),
    TerminusModule,
  ],
  providers: [Logger, ConfigService, PrismaService, PrismaHealthIndicator],
  exports: [Logger, ConfigService, PrismaService],
})
export class CoreModule {}
