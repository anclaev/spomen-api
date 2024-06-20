import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'

import { AccountRepository } from '@/account/account.repository'
import { ConfigService } from '@core/config'

import { TokenPayload } from '@interfaces/token-payload'
import { mockUser } from '@mocks/account.mock'

import { JwtStrategy } from '../jwt.strategy'
import { UnauthorizedException } from '@nestjs/common'

describe('JwtStrategy', () => {
  let repo: DeepMockProxy<AccountRepository>
  let service: DeepMockProxy<ConfigService>
  let strategy: JwtStrategy

  const mockToken: TokenPayload = {
    userid: '1',
    username: 'test',
    email: null,
    vk_id: null,
    vk_access_token: null,
    vk_avatar: null,
  }

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
    repo.findOne.mockResolvedValueOnce({ ...mockUser, password: 'test' })

    return strategy
      .validate(mockToken)
      .then((data) => expect(data).toStrictEqual(mockUser))
  })

  it('Должна выдавать исключение', () => {
    repo.findOne.mockResolvedValueOnce(null)

    return strategy
      .validate(mockToken)
      .catch((err) => expect(err).toBeInstanceOf(UnauthorizedException))
  })
})
