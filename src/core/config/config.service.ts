import { ConfigService as RootService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'

import { ENV } from '@enums/env'

@Injectable()
export class ConfigService extends RootService {
  constructor() {
    super()
  }

  gett<T>(key: keyof typeof ENV): T {
    return this.get<T>(key) as T
  }

  get isProduction(): boolean {
    return this.gett<string>('NODE_ENV') === 'production'
  }

  get environment(): string {
    return this.gett<string>('NODE_ENV')
  }

  get port(): number {
    return this.gett<number>('PORT')
  }
}
