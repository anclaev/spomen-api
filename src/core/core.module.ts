import { PrismaHealthIndicator, TerminusModule } from '@nestjs/terminus'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { PrismaModule, PrismaService } from 'nestjs-prisma'
import { Global, Logger, Module } from '@nestjs/common'
import { NestjsFormDataModule } from 'nestjs-form-data'
import { ConfigModule } from '@/config/config.module'
import { GraphQLModule } from '@nestjs/graphql'
import { NestMinioModule } from 'nestjs-minio'
import { JwtModule } from '@nestjs/jwt'

import { AppConfigService } from '@/config/app-config.service'
import { ConfigService } from '@/config/config.service'

/**
 * Системный модуль приложения
 * @description Экспортирует:
 * * Логгер приложения
 * * Сервис работы с базой данных
 */
@Global()
@Module({
  imports: [
    ConfigModule,
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
        fieldResolverEnhancers: ['interceptors', 'guards', 'filters'],
        allowBatchedHttpRequests: true,
        installSubscriptionHandlers: true,
        includeStacktraceInErrorResponses: true,
        nodeEnv: config.gett('NODE_ENV'),
        formatError: (error) => {
          const graphQLFormattedError = {
            message: error.message,
            description: error.extensions!.description,
            code: error.extensions?.code || 'SERVER_ERROR',
          }
          return graphQLFormattedError
        },
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
  providers: [Logger, PrismaService, AppConfigService, PrismaHealthIndicator],
  exports: [Logger, PrismaService, AppConfigService],
})
export class CoreModule {}
