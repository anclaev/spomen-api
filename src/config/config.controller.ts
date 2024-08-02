import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common'
import { Config } from '@prisma/client'

import { AppConfigService } from '@/config/app-config.service'

import { UseAuth } from '@decorators/auth'

import { APIError } from '@interfaces/api-error'

import { UpdateConfigDto } from '@/config/dto/update-config.dto'

@UseAuth(['Administrator'])
@Controller('config')
export class ConfigController {
  constructor(private readonly appConfig: AppConfigService) {}

  @Get()
  async getConfiguration(): Promise<Config[]> {
    return await this.appConfig.getConfig()
  }

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async updateConfiguration(
    @Body() dto: UpdateConfigDto,
  ): Promise<Config | APIError> {
    if (!dto.value && !dto.label) {
      return this.catchError(
        new APIError(
          HttpStatus.BAD_REQUEST,
          'Некорректные данные конфигурации',
        ),
      )
    }
    const updatedConfig = await this.appConfig.updateConfig(dto)

    return this.catchError<Config>(updatedConfig)
  }

  /**
   * Обработчик ошибок
   * @param {unknown | APIError} data Результат запроса
   * @returns {unknown} Обработанный запрос
   */
  private catchError<T>(data: T | APIError): T {
    if (data instanceof APIError) {
      throw new HttpException(data.message, data.status)
    }

    return data
  }
}
