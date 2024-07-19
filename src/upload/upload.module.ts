import { Module } from '@nestjs/common'

// Репозитории
import { UploadRepository } from './upload.repository'

// Сервисы
import { UploadService } from './upload.service'

// Контроллеры
import { UploadController } from './upload.controller'

/**
 * Модуль загрузки
 * @description Экспортирует:
 * * Сервис загрузок
 */
@Module({
  providers: [UploadService, UploadRepository],
  controllers: [UploadController],
  exports: [UploadService],
})
export class UploadModule {}
