import { DeepMockProxy, mockDeep } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'
import { BadRequestException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as argon2 from 'argon2'

import { mockAccount, mockAuthenticatedUser } from '@mocks/account.mock'
import { AccountRepository } from '@/account/account.repository'

import { ConfigService } from '@core/config'
import { AuthService } from '../auth.service'

describe('AuthService', () => {
  let service: AuthService
  let repo: DeepMockProxy<AccountRepository>
  let jwt: DeepMockProxy<JwtService>

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountRepository, AuthService, JwtService, ConfigService],
    })
      .overrideProvider(AccountRepository)
      .useValue(mockDeep<AccountRepository>())
      .overrideProvider(JwtService)
      .useValue(mockDeep<JwtService>())
      .compile()

    service = module.get<AuthService>(AuthService)
    repo = module.get(AccountRepository)
    jwt = module.get(JwtService)
  })

  it('Должен быть определён', () => {
    expect(service).toBeDefined()
  })

  it('Должен возвращать зарегистрированного пользователя', () => {
    repo.create.mockResolvedValueOnce(mockAccount)

    service
      .signUp({
        username: 'test',
        password: 'test',
      })
      .then((data) => expect(data).toStrictEqual(mockAccount))
  })

  it('Должен возвращать ошибку при отсутствии аккаунта', () => {
    repo.create.mockResolvedValueOnce(mockAccount)

    service
      .verifyAccount(null, 'test')
      .catch((err) => expect(err).toBeInstanceOf(BadRequestException))
  })

  it('Должен возвращать ошибку при неправильном пароле', () => {
    jest.spyOn(argon2, 'verify').mockReturnValue(new Promise(() => false))

    service
      .verifyAccount(mockAccount, 'test')
      .catch((err) => expect(err).toBeInstanceOf(BadRequestException))
  })

  it('Должен возвращать проверенного пользователя', () => {
    jest.spyOn(argon2, 'verify').mockReturnValue(new Promise(() => true))

    service
      .verifyAccount(mockAccount, 'test')
      .then((data) => expect(data).toStrictEqual(mockAuthenticatedUser))
  })

  it('Должен генерировать токен', () => {
    jwt.signAsync.mockReturnValue(new Promise(() => 'test'))

    service
      .generateToken(
        {
          username: 'test',
          userid: '1',
          email: null,
          vk_access_token: null,
          vk_avatar: null,
          vk_id: null,
        },
        'access',
      )
      .then((data) => expect(data).toBe('test'))
  })

  it('Должен возвращать пользователя по почте и проверять его', () => {
    repo.findOne.mockResolvedValueOnce(mockAccount)

    jest.spyOn(argon2, 'verify').mockReturnValue(new Promise(() => true))

    service
      .getAuthenticatedUserByEmail('test', 'test')
      .then((data) => expect(data).toStrictEqual(mockAuthenticatedUser))
  })

  it('Должен возвращать пользователя по логину и проверять его', () => {
    repo.findOne.mockResolvedValueOnce(mockAccount)

    jest.spyOn(argon2, 'verify').mockReturnValue(new Promise(() => true))

    service
      .getAuthenticatedUserByLogin('test', 'test')
      .then((data) => expect(data).toStrictEqual(mockAuthenticatedUser))
  })
})
