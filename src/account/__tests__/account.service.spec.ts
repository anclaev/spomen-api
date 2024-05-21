import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'
import { Account } from '@common/graphql/index'

import { AccountRepository } from '../account.repository'
import { AccountService } from '../account.service'

describe('AccountService', () => {
  let service: AccountService
  let repo: DeepMockProxy<AccountRepository>

  beforeEach(async () => {
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
    const testRes: Account = {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      email: null,
      roles: [],
      avatarId: null,
      vkId: null,
      vkAvatar: null,
      name: null,
      surname: null,
      gender: null,
      birthday: null,
      loveId: null,
      login: 'test2',
      password: 'test',
    }

    repo.findOne.mockResolvedValueOnce(testRes)

    return service.findOne('1').then((data) => expect(data).toBe(testRes))
  })
})
