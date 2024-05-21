import { Test, TestingModule } from '@nestjs/testing'
import { mockDeep, DeepMockProxy } from 'jest-mock-extended'

import { mockAuthenticatedUser } from '@mocks/account.mock'
import { AuthService } from '@/auth/auth.service'

import { LoginStrategy } from '../login.strategy'

describe('LoginStrategy', () => {
  let service: DeepMockProxy<AuthService>
  let strategy: LoginStrategy

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockDeep<AuthService>())
      .compile()

    service = module.get(AuthService)
    strategy = new LoginStrategy(service)
  })

  it('Должна быть определена', () => {
    expect(strategy).toBeDefined()
  })

  it('Должна возвращать пользователя', () => {
    service.getAuthenticatedUserByLogin.mockResolvedValueOnce(
      mockAuthenticatedUser,
    )

    return strategy
      .validate('test', 'test')
      .then((data) => expect(data).toBe(mockAuthenticatedUser))
  })
})
