import { DeepMockProxy, mockDeep } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'

import { Account } from '@common/graphql/index'

import { AccountResolver } from '../account.resolver'
import { AccountService } from '../account.service'

describe('AccountResolver', () => {
  let resolver: AccountResolver
  let service: DeepMockProxy<AccountService>

  beforeEach(async () => {
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

    service.findOne.mockResolvedValueOnce(testRes)

    return service.findOne('1').then((data) => expect(data).toBe(testRes))
  })
})
