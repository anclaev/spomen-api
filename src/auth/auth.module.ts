import { Module } from '@nestjs/common'

import { AccountRepository } from '@/account/account.repository'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

import { EmailStrategy } from './strategies/email.strategy'
import { LoginStrategy } from './strategies/login.strategy'

@Module({
  providers: [AuthService, AccountRepository, EmailStrategy, LoginStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
