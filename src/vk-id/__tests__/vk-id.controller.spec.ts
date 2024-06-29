import { Test, TestingModule } from '@nestjs/testing'
import { HttpModule } from '@nestjs/axios'

import { ConfigService } from '@core/config'

import { VKIDController } from '../vk-id.controller'
import { VKIDService } from '../vk-id.service'

describe('VKIDController', () => {
  let controller: VKIDController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [VKIDController],
      providers: [VKIDService, ConfigService],
    }).compile()

    controller = module.get<VKIDController>(VKIDController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
