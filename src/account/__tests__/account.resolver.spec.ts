import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'nestjs-prisma'

import { AccountResolver } from '../account.resolver'
import { AccountService } from '../account.service'
import { AccountRepository } from '../account.repository'

describe('AccountResolver', () => {
  let resolver: AccountResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountResolver,
        AccountService,
        AccountRepository,
        PrismaService,
      ],
    }).compile()

    resolver = module.get<AccountResolver>(AccountResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
