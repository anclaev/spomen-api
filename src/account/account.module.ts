import { Module } from '@nestjs/common'

import { UploadModule } from '@/upload/upload.module'

import { AccountController } from './account.controller'
import { AccountRepository } from './account.repository'
import { AccountResolver } from './account.resolver'
import { AccountService } from './account.service'

/**
 * Модуль аккаунта
 * @description Экспортирует:
 * * AccountService
 */
@Module({
  imports: [UploadModule],
  providers: [AccountRepository, AccountService, AccountResolver],
  controllers: [AccountController],
  exports: [AccountService],
})
export class AccountModule {}
