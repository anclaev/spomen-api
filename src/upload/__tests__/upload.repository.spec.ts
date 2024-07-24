import { UploadRepository } from '@/upload/upload.repository'
import { DeepMockProxy, mockDeep } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaClient } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'

describe('UploadRepository', () => {
  let repo: UploadRepository
  let prisma: DeepMockProxy<PrismaClient>

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadRepository, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile()

    repo = module.get<UploadRepository>(UploadRepository)
    prisma = module.get(PrismaService)
  })

  it('Должен быть определён', () => {
    expect(repo).toBeDefined()
  })
})
