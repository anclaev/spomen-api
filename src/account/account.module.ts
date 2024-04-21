import { Module } from '@nestjs/common'

import { AccountRepository } from './account.repository'
import { AccountResolver } from './account.resolver'
import { AccountService } from './account.service'

@Module({
  providers: [AccountRepository, AccountService, AccountResolver],
})
export class AccountModule {}
