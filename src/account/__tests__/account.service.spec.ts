import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'

import { mockAccount } from '@mocks/account.mock'

import { AccountRepository } from '../account.repository'
import { AccountService } from '../account.service'

describe('AccountService', () => {
  let service: AccountService
  let repo: DeepMockProxy<AccountRepository>

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountService, AccountRepository],
    })
      .overrideProvider(AccountRepository)
      .useValue(mockDeep<AccountRepository>())
      .compile()

    service = module.get<AccountService>(AccountService)
    repo = module.get(AccountRepository)
  })

  it('Должен быть определён', () => {
    expect(service).toBeDefined()
  })

  it('Должен возвращать найденный аккаунт', () => {
    repo.findOne.mockResolvedValueOnce(mockAccount)

    return service.findOne('1').then((data) => expect(data).toBe(mockAccount))
  })
})
