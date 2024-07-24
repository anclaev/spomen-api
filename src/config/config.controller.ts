import { Controller } from '@nestjs/common'

import { ConfigService } from '@/config/config.service'

import { UseAuth } from '@decorators/auth'

@UseAuth(['Administrator'])
@Controller('config')
export class ConfigController {
  constructor(config: ConfigService) {}
}
