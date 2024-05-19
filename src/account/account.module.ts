import { Module } from '@nestjs/common'

import { AccountRepository } from './account.repository'
import { AccountResolver } from './account.resolver'
import { AccountService } from './account.service'

/**
 * Модуль сущности аккаунта
 * @description Включает в себя:
 * @description Репозиторий аккаунта;
 * @description Сервис аккаунта;
 * @description GraphQL-ресольвер аккаунта.
 */
@Module({
  providers: [AccountRepository, AccountService, AccountResolver],
})
export class AccountModule {}
