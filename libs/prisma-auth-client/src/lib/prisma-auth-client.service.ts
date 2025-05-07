import { Injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client/auth'

@Injectable()
export class PrismaAuthClientService
  extends PrismaClient
  implements OnModuleInit
{
  constructor() {
    super({})
  }
  async onModuleInit() {
    await this.$connect()
  }
}
