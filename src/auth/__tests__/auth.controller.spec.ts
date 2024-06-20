import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'nestjs-prisma'
import { JwtService } from '@nestjs/jwt'

import { AccountRepository } from '@/account/account.repository'

import { AuthController } from '../auth.controller'
import { TokenService } from '../token.service'
import { AuthService } from '../auth.service'
import { ConfigService } from '@core/config'

describe('AuthController', () => {
  let controller: AuthController

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        JwtService,
        PrismaService,
        ConfigService,
        TokenService,
        AccountRepository,
      ],
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
