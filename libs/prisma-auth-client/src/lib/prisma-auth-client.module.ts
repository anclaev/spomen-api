import { Module } from '@nestjs/common'
import { PrismaAuthClientService } from './prisma-auth-client.service'

@Module({
  controllers: [],
  providers: [PrismaAuthClientService],
  exports: [PrismaAuthClientService],
})
export class PrismaAuthClientModule {}
