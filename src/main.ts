import { WinstonModule } from 'nest-winston'
import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'

import { winstonOptions } from '@common/utils/winston'
import { ConfigService } from '@config/config.service'

import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonOptions),
  })

  const config = app.get(ConfigService)
  const logger = app.get(Logger)

  await app.listen(config.port).finally(() => {
    logger.log(
      `Environment: \x1b[36m${config.environment.toUpperCase()}\x1b[0m | Port: \x1b[36m${config.port}\x1b[0m`,
      'NestApplication',
    )
  })
}

bootstrap()
