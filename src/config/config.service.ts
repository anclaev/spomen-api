import { ConfigService as RootService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'

import { ENV } from '@common/enums/env'

@Injectable()
export class ConfigService extends RootService {
  constructor() {
    super()
  }

  get environment(): string {
    return this.get<string>(ENV.NODE_ENV)!
  }

  gett<T>(key: keyof typeof ENV): T {
    return this.get<T>(key) as T
  }
}
