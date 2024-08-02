import { DeepMockProxy, mockDeep } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'

import { mockAccount } from '@mocks/account.mock'

import { AccountResolver } from '../account.resolver'
import { AccountService } from '../account.service'

describe('AccountResolver', () => {
  let resolver: AccountResolver
  let service: DeepMockProxy<AccountService>

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountResolver, AccountService],
    })
      .overrideProvider(AccountService)
      .useValue(mockDeep<AccountService>())
      .compile()

    resolver = module.get<AccountResolver>(AccountResolver)
    service = module.get(AccountService)
  })

  it('Должен быть определён', () => {
    expect(resolver).toBeDefined()
  })
})
