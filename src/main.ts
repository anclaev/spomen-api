import { Logger, ValidationPipe } from '@nestjs/common'
import { WinstonModule } from 'nest-winston'
import { NestFactory } from '@nestjs/core'

import { winstonOptions } from '@common/utils/winston'
import { ConfigService } from '@config/config.service'

import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonOptions),
  })

  const config = app.get(ConfigService)
  const logger = app.get(Logger)

  app.enableCors({
    credentials: true,
    origin: config.gett<string>('ORIGIN'),
  })

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  )

  await app.listen(config.port).finally(() => {
    logger.log(
      `Environment: \x1b[36m${config.environment.toUpperCase()}\x1b[0m | Port: \x1b[36m${config.port}\x1b[0m`,
      'NestApplication',
    )
  })
}

bootstrap()
