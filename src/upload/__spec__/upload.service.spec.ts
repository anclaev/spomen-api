import { Test, TestingModule } from '@nestjs/testing'
import { UploadService } from '../upload.service'

describe('UploadService', () => {
  let service: UploadService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadService],
    }).compile()

    service = module.get<UploadService>(UploadService)
  })

  it('Должен быть определён', () => {
    expect(service).toBeDefined()
  })
})
