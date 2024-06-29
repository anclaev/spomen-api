import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { UnauthorizedException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'

import { AccountRepository } from '@/account/account.repository'
import { ConfigService } from '@core/config'

import { mockTokenPayload } from '@mocks/token.mock'
import { mockUser } from '@mocks/account.mock'

import { JwtStrategy } from '../jwt.strategy'

describe('JwtStrategy', () => {
  let repo: DeepMockProxy<AccountRepository>
  let service: DeepMockProxy<ConfigService>
  let strategy: JwtStrategy

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

    strategy = new JwtStrategy(service, repo)
  })

  it('Должна быть определена', () => {
    expect(strategy).toBeDefined()
  })

  it('Должна возвращать пользователя', () => {
    repo.findOne.mockResolvedValueOnce({
      ...mockUser,
      password: 'test',
      refresh_tokens: [],
    })

    return strategy.validate(mockTokenPayload).then((data) =>
      expect(data).toStrictEqual({
        ...mockUser,
        password: undefined,
        refresh_tokens: undefined,
      }),
    )
  })

  it('Должна выдавать исключение', () => {
    repo.findOne.mockResolvedValueOnce(null)

    return strategy
      .validate(mockTokenPayload)
      .catch((err) => expect(err).toBeInstanceOf(UnauthorizedException))
  })
})
