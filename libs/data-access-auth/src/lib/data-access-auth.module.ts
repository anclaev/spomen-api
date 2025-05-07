import { PrismaAuthClientModule } from '@api/prisma-auth-client'
import { Module } from '@nestjs/common'

import { AuthRepository } from './auth.repository'

@Module({
  imports: [PrismaAuthClientModule],
  providers: [AuthRepository],
  exports: [AuthRepository],
})
export class DataAccessAuthModule {}
