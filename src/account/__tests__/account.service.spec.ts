import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'nestjs-prisma'

import { AccountRepository } from '../account.repository'
import { AccountService } from '../account.service'

describe('AccountService', () => {
  let service: AccountService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountService, AccountRepository, PrismaService],
    }).compile()

    service = module.get<AccountService>(AccountService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
