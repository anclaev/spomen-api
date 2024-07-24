import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { Test, TestingModule } from '@nestjs/testing'

import { mockAccount } from '@mocks/account.mock'

import { AccountRepository } from '../account.repository'
import { AccountService } from '../account.service'

import { UploadService } from '@/upload/upload.service'

describe('AccountService', () => {
  let service: AccountService
  let repo: DeepMockProxy<AccountRepository>

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountService, AccountRepository, UploadService],
    })
      .overrideProvider(AccountRepository)
      .useValue(mockDeep<AccountRepository>())
      .overrideProvider(UploadService)
      .useValue(mockDeep<UploadService>())
      .compile()

    service = module.get<AccountService>(AccountService)
    repo = module.get(AccountRepository)
  })

  it('Должен быть определён', () => {
    expect(service).toBeDefined()
  })
})
