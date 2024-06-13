import { Test, TestingModule } from '@nestjs/testing'
import { CoreModule } from '@core/core.module'
import { PrismaService } from 'nestjs-prisma'
import { HttpModule } from '@nestjs/axios'
import { JwtService } from '@nestjs/jwt'

import { AccountRepository } from '@/account/account.repository'
import { VKIDService } from '@core/vkid/vkid.service'

import { AuthController } from '../auth.controller'
import { AuthService } from '../auth.service'
import { ConfigService } from '@core/config'

describe('AuthController', () => {
  let controller: AuthController

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [AuthController],
      providers: [
        AuthService,
        JwtService,
        PrismaService,
        ConfigService,
        VKIDService,
        AccountRepository,
      ],
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
