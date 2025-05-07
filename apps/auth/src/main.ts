/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { User } from '@prisma/client/auth'
import { AppModule } from './app/app.module'

async function bootstrap() {
  const user: User = {
    id: 1,
    email: 'a',
    name: 'a',
  }

  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3001
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
  console.log(user)
}

bootstrap()
