import { Test, TestingModule } from '@nestjs/testing'
import { VKIDService } from './vkid.service'
import { HttpModule } from '@nestjs/axios'
import { ConfigService } from '@core/config'
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
