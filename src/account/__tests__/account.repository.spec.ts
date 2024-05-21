import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from 'nestjs-prisma'
import { PrismaClient } from '@prisma/client'

import {
  Account,
  CreateOneAccountArgs,
  FindManyAccountArgs,
  FindUniqueAccountArgs,
  UpdateOneAccountArgs,
} from '@common/graphql/index'

import { AccountRepository } from '../account.repository'

describe('AccountRepository', () => {
  let repo: AccountRepository
  let prisma: DeepMockProxy<PrismaClient>

  beforeEach(async () => {
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
        login: 'test',
        password: 'test',
      },
    }
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
      login: 'test',
      password: 'test',
    }

    prisma.account.create.mockResolvedValueOnce(testRes)

    return repo.create(testReq).then((data) => expect(data).toBe(testRes))
  })

  it('Должен возвращать null, если аккаунт не уникален', () => {
    const testReq: CreateOneAccountArgs = {
      data: {
        login: 'test',
        password: 'test',
      },
    }
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
      login: 'test',
      password: 'test',
    }

    prisma.account.findUnique.mockResolvedValueOnce(testRes)

    return repo.create(testReq).then((data) => expect(data).toBe(null))
  })

  it('Должен возвращать обновлённый аккаунт', () => {
    const testReq: UpdateOneAccountArgs = {
      where: {
        id: '1',
      },
      data: {
        login: {
          set: 'test2',
        },
      },
    }

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

    prisma.account.update.mockResolvedValueOnce(testRes)

    return repo.update(testReq).then((data) => expect(data).toBe(testRes))
  })

  // it('Должен возвращать null, если аккаунт не найден', () => {
  //   const testReq: UpdateOneAccountArgs = {
  //     where: {
  //       id: '1',
  //     },
  //     data: {
  //       login: {
  //         set: 'test2',
  //       },
  //     },
  //   }

  //   prisma.account.update.mockImplementation()

  //   expect(repo.update(testReq)).resolves.toEqual()
  // })

  it('Должен возвращать найденный аккаунт', () => {
    const testReq: FindUniqueAccountArgs = {
      where: {
        id: '1',
      },
    }

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

    prisma.account.findUnique.mockResolvedValueOnce(testRes)

    return repo.findOne(testReq).then((data) => expect(data).toBe(testRes))
  })

  it('Должен возвращать множество аккаунтов по параметру', () => {
    const testReq: FindManyAccountArgs = {
      where: {
        login: {
          contains: 'test',
        },
      },
    }

    const testRes: Account[] = [
      {
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
        login: 'test',
        password: 'test',
      },
      {
        id: '2',
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
      },
    ]

    prisma.account.findMany.mockResolvedValueOnce(testRes)

    return repo.findMany(testReq).then((data) => expect(data).toBe(testRes))
  })
})
