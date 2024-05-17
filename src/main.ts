import { PrismaClientExceptionFilter, PrismaService } from 'nestjs-prisma'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { PrismaHealthIndicator } from '@nestjs/terminus'
import { Logger, ValidationPipe } from '@nestjs/common'
import * as cookieParser from 'cookie-parser'
import { WinstonModule } from 'nest-winston'

import { winstonOptions } from '@common/utils/winston'

import { ConfigService } from '@core/config'

import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonOptions),
  })

  const prismaHealthIndicator = app.get(PrismaHealthIndicator)
  const { httpAdapter } = app.get(HttpAdapterHost)
  const prisma = app.get(PrismaService)
  const config = app.get(ConfigService)
  const logger = app.get(Logger)

  app.enableCors({
    credentials: true,
    origin: config.gett<string>('ORIGIN'),
  })

  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  app.use(cookieParser(config.gett<string>('COOKIE_SECRET')))

  try {
    await prismaHealthIndicator.pingCheck('Prisma', prisma)
    logger.log(
      `Connection to database \x1b[36m${'successful'}\x1b[0m!`,
      'PrismaClient',
    )
  } catch (e) {
    logger.error('No connection to database!', null, 'PrismaClient')
  }

  await await app.listen(config.port).finally(() => {
    logger.log(
      `Environment: \x1b[36m${config.environment.toUpperCase()}\x1b[0m | Port: \x1b[36m${config.port}\x1b[0m`,
      'NestApplication',
    )
  })
}

bootstrap()
