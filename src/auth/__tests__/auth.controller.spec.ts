import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'nestjs-prisma'
import { JwtService } from '@nestjs/jwt'

import { AccountRepository } from '@/account/account.repository'
import { AuthController } from '../auth.controller'
import { AuthService } from '../auth.service'

describe('AuthController', () => {
  let controller: AuthController

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, JwtService, PrismaService, AccountRepository],
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
