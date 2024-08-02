import '@utils/sentry'

import { PrismaClientExceptionFilter, PrismaService } from 'nestjs-prisma'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { PrismaHealthIndicator } from '@nestjs/terminus'
import { Logger, ValidationPipe } from '@nestjs/common'
import * as cookieParser from 'cookie-parser'
import { WinstonModule } from 'nest-winston'
import * as Sentry from '@sentry/node'

import { AppModule } from './app.module'

// Сервисы
import { AppConfigService } from '@/config/app-config.service'
import { ConfigService } from '@/config/config.service'

// Фильтры
import { HandledExceptionFilter, SentryFilter } from '@common/filters'

// Утилиты
import { winstonOptions } from '@utils/winston'
import { colorize } from '@utils/funcs'

// Enums
import { CONSOLE_COLOR } from '@enums/console-color'

/**
 * Точка входа в приложение
 */
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonOptions),
  })

  const prismaHealthIndicator = app.get(PrismaHealthIndicator)
  const { httpAdapter } = app.get(HttpAdapterHost)
  const appConfig = app.get(AppConfigService)
  const prisma = app.get(PrismaService)
  const config = app.get(ConfigService)
  const logger = app.get(Logger)

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true,
    }),
  )

  app.use(cookieParser(config.gett<string>('COOKIE_SECRET')))

  app.enableCors({
    credentials: true,
    origin: config.gett<string>('ORIGIN'),
  })

  try {
    await prismaHealthIndicator.pingCheck('Prisma', prisma)
    logger.log(
      `Connection to database ${colorize('successfully', CONSOLE_COLOR.PRIMARY)}!`,
      'PrismaClient',
    )
  } catch (e) {
    logger.error('No connection to database!', null, 'PrismaClient')
  }

  await appConfig.init()

  Sentry.setupNestErrorHandler(app, new SentryFilter(httpAdapter))

  app.useGlobalFilters(
    new PrismaClientExceptionFilter(httpAdapter),
    new HandledExceptionFilter(),
  )

  await app.listen(config.port).finally(() => {
    logger.log(
      `Environment: ${colorize(config.environment.toUpperCase(), CONSOLE_COLOR.PRIMARY)} | ${colorize('Port:')} ${colorize(config.port.toString(), CONSOLE_COLOR.PRIMARY)}`,
      'NestApplication',
    )
  })
}

bootstrap()
