import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'

import { VKIDController } from './vkid.controller'
import { VKIDService } from './vkid.service'

@Module({
  imports: [HttpModule],
  controllers: [VKIDController],
  providers: [VKIDService],
  exports: [VKIDService],
})
export class VKIDModule {}
