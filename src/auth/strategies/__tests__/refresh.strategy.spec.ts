import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { UnauthorizedException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'

import { AccountRepository } from '@/account/account.repository'
import { ConfigService } from '@core/config'

import { mockTokenPayload, mockToken } from '@mocks/token.mock'
import { mockRequestWithRefresh } from '@mocks/request.mock'
import { mockUser } from '@mocks/account.mock'

import { RefreshStrategy } from '../refresh.strategy'

describe('RefreshStrategy', () => {
  let repo: DeepMockProxy<AccountRepository>
  let service: DeepMockProxy<ConfigService>
  let strategy: RefreshStrategy

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService, AccountRepository],
    })
      .overrideProvider(AccountRepository)
      .useValue(mockDeep<AccountRepository>())
      .overrideProvider(ConfigService)
      .useValue(mockDeep<ConfigService>())
      .compile()

    repo = module.get(AccountRepository)
    service = module.get(ConfigService)

    service.gett.mockImplementation((val: string) => '23d18313jd1d3')

    strategy = new RefreshStrategy(service, repo)
  })

  it('Должна быть определена', () => {
    expect(strategy).toBeDefined()
  })

  it('Должна возвращать пользователя', () => {
    repo.findOne.mockResolvedValueOnce({
      ...mockUser,
      password: 'test',
      refresh_tokens: [mockToken],
    })

    return strategy
      .validate(mockRequestWithRefresh(), mockTokenPayload)
      .then((data) =>
        expect(data).toStrictEqual({
          ...mockUser,
          password: undefined,
          refresh_token: mockToken,
          refresh_tokens: undefined,
        }),
      )
  })

  it('Должна выдавать исключение, если аккаунт не найден', () => {
    repo.findOne.mockResolvedValueOnce(null)

    return strategy
      .validate(mockRequestWithRefresh(), mockTokenPayload)
      .catch((err) => expect(err).toBeInstanceOf(UnauthorizedException))
  })

  it('Должна выдавать исключение, если токены не совпадают', () => {
    repo.findOne.mockResolvedValueOnce({
      ...mockUser,
      password: 'test',
      refresh_tokens: ['test'],
    })

    return strategy
      .validate(mockRequestWithRefresh(), mockTokenPayload)
      .catch((err) => expect(err).toBeInstanceOf(UnauthorizedException))
  })
})
