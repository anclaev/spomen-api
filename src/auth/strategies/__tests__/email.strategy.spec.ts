import { Test, TestingModule } from '@nestjs/testing'
import { mockDeep, DeepMockProxy } from 'jest-mock-extended'

import { mockAuthenticatedUser } from '@mocks/account.mock'
import { AuthService } from '@/auth/auth.service'

import { EmailStrategy } from '../email.strategy'

describe('EmailStrategy', () => {
  let service: DeepMockProxy<AuthService>
  let strategy: EmailStrategy

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockDeep<AuthService>())
      .compile()

    service = module.get(AuthService)
    strategy = new EmailStrategy(service)
  })

  it('Должна быть определена', () => {
    expect(strategy).toBeDefined()
  })

  it('Должна возвращать пользователя', () => {
    service.getAuthenticatedUserByEmail.mockResolvedValueOnce(
      mockAuthenticatedUser,
    )

    return strategy
      .validate('test', 'test')
      .then((data) => expect(data).toBe(mockAuthenticatedUser))
  })
})
