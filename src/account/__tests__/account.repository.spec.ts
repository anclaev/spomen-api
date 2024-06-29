import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'nestjs-prisma'
import { PrismaClient } from '@prisma/client'

import { mockAccount } from '@mocks/account.mock'

import {
  CreateOneAccountArgs,
  FindManyAccountArgs,
  FindUniqueAccountArgs,
  UpdateOneAccountArgs,
} from '@common/graphql/index'

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

  it('Должен возвращать созданный аккаунт', () => {
    const testReq: CreateOneAccountArgs = {
      data: {
        username: 'test',
        password: 'test',
      },
    }
    prisma.account.create.mockResolvedValueOnce(mockAccount)

    return repo.create(testReq).then((data) => expect(data).toBe(mockAccount))
  })

  it('Должен возвращать null, если аккаунт не уникален', () => {
    const testReq: CreateOneAccountArgs = {
      data: {
        username: 'test',
        password: 'test',
      },
    }

    prisma.account.findUnique.mockResolvedValueOnce(mockAccount)

    return repo.create(testReq).then((data) => expect(data).toBe(null))
  })

  it('Должен возвращать обновлённый аккаунт', () => {
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

  it('Должен возвращать null, если аккаунт не найден', () => {
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

    return repo.update(testReq).then((data) => expect(data).toBe(null))
  })

  it('Должен возвращать найденный аккаунт', () => {
    const testReq: FindUniqueAccountArgs = {
      where: {
        id: '1',
      },
    }

    prisma.account.findUnique.mockResolvedValueOnce(mockAccount)

    return repo.findOne(testReq).then((data) => expect(data).toBe(mockAccount))
  })

  it('Должен возвращать множество аккаунтов по параметру', () => {
    const testReq: FindManyAccountArgs = {
      where: {
        username: {
          contains: 'test',
        },
      },
    }

    prisma.account.findMany.mockResolvedValueOnce([mockAccount])

    return repo
      .findMany(testReq)
      .then((data) => expect(data).toStrictEqual([mockAccount]))
  })
})
