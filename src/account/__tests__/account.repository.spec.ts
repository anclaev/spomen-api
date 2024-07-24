import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'nestjs-prisma'
import { PrismaClient } from '@prisma/client'

import { mockAccount } from '@mocks/account.mock'

import {
  CreateOneAccountArgs,
  FindUniqueAccountArgs,
  UpdateOneAccountArgs,
} from '@graphql'

import { AccountRepository } from '../account.repository'

describe('AccountRepository', () => {
  let repo: AccountRepository
  let prisma: DeepMockProxy<PrismaClient>

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile()

    repo = module.get<AccountRepository>(AccountRepository)
    prisma = module.get(PrismaService)
  })

  it('Должен быть определён', () => {
    expect(repo).toBeDefined()
  })

  it('Должен возвращать созданный аккаунт', async () => {
    const testReq: CreateOneAccountArgs = {
      data: {
        username: 'test',
        password: 'test',
      },
    }
    prisma.account.create.mockResolvedValueOnce(mockAccount)

    const data = await repo.create(testReq)
    return expect(data).toBe(mockAccount)
  })

  it('Должен возвращать null, если аккаунт не уникален', async () => {
    const testReq: CreateOneAccountArgs = {
      data: {
        username: 'test',
        password: 'test',
      },
    }

    prisma.account.findUnique.mockResolvedValueOnce(mockAccount)

    return repo.create(testReq).then((data) => expect(data).toBeUndefined())
  })

  it('Должен возвращать обновлённый аккаунт', async () => {
    const testReq: UpdateOneAccountArgs = {
      where: {
        id: '1',
      },
      data: {
        username: {
          set: 'test2',
        },
      },
    }

    prisma.account.update.mockResolvedValueOnce(mockAccount)

    return repo.update(testReq).then((data) => expect(data).toBe(mockAccount))
  })

  it('Должен возвращать null, если аккаунт не найден', async () => {
    const testReq: UpdateOneAccountArgs = {
      where: {
        id: '1',
      },
      data: {
        username: {
          set: 'test2',
        },
      },
    }

    prisma.account.update.mockImplementationOnce(() => null!)

    const data = await repo.update(testReq)
    return expect(data).toBe(null)
  })

  it('Должен возвращать найденный аккаунт', async () => {
    const testReq: FindUniqueAccountArgs = {
      where: {
        id: '1',
      },
    }

    prisma.account.findUnique.mockResolvedValueOnce(mockAccount)

    return repo.findOne(testReq).then((data) => expect(data).toBe(mockAccount))
  })
})
