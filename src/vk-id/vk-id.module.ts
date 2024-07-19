import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { VKIDController } from './vk-id.controller'
import { VKIDService } from './vk-id.service'

/**
 * Сервис интеграции VKID
 * @description Экспортирует:
 * * Сервис работы с VKID
 */
@Module({
  imports: [HttpModule],
  controllers: [VKIDController],
  providers: [VKIDService],
  exports: [VKIDService],
})
export class VKIDModule {}
