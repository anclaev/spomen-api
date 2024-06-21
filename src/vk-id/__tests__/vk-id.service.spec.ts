import { Test, TestingModule } from '@nestjs/testing'
import { HttpModule } from '@nestjs/axios'

import { ConfigService } from '@core/config'

import { VKIDService } from '../vk-id.service'

describe('VKIDService', () => {
  let service: VKIDService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [VKIDService, ConfigService],
    }).compile()

    service = module.get<VKIDService>(VKIDService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
