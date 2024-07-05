import { Module } from '@nestjs/common'

import { AccountRepository } from './account.repository'
import { AccountResolver } from './account.resolver'
import { AccountService } from './account.service'
import { AccountController } from './account.controller'
import { UploadModule } from '@/upload/upload.module'

/**
 * Модуль сущности аккаунта
 * @description Включает в себя:
 * @description Репозиторий аккаунта;
 * @description Сервис аккаунта;
 * @description GraphQL-ресольвер аккаунта.
 */
@Module({
  imports: [UploadModule],
  providers: [AccountRepository, AccountService, AccountResolver],
  controllers: [AccountController],
})
export class AccountModule {}
