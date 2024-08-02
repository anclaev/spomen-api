import { HttpStatus, Injectable, Logger } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { Config } from '@prisma/client'

import { ConfigService } from '@/config/config.service'

import { colorize } from '@utils/funcs'

import { CONSOLE_COLOR } from '@enums/console-color'

import * as APP_CONFIG_DEFAULT from './app-config.default.json'
import { UpdateConfigDto } from '@/config/dto/update-config.dto'
import { APIError } from '@interfaces/api-error'

/**
 * Лимиты загрузок по-умолчанию
 */
export const DEFAULT_UPLOADS_LIMIT: {
  [key: string]: number
} = {
  Default: 30,
  Public: 30,
  Administrator: 100,
}

/**
 * Сервис конфигурации приложения
 */
@Injectable()
export class AppConfigService {
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
    private readonly logger: Logger,
  ) {}

  /**
   * Инициализация конфигурации приложения
   */
  async init() {
    // Получение конфигурации из базы данных
    const config = await this.prisma.config.findMany()

    for (const item of Object.keys(APP_CONFIG_DEFAULT)) {
      const existConfigItem = config.find(
        (configItem) => configItem.key === item,
      )

      if (!existConfigItem) {
        // Проверка наличия конфигурации в приложении
        const value = this.config.get(item)

        if (!value) {
          this.logger.error(
            'Configuration parameter not specified: ' + item,
            undefined,
            'AppConfigService',
          )
          throw new Error('Configuration parameter not specified: ' + item)
        }

        // Сохранение конфигурации в базе данных из переменных среды
        try {
          await this.prisma.config.create({
            data: {
              key: item,
              label:
                APP_CONFIG_DEFAULT[item as keyof typeof APP_CONFIG_DEFAULT],
              value: { value },
            },
          })

          this.config.set(item, JSON.stringify({ value }))
        } catch (e) {
          this.logger.error(
            'Error saving configuration parameter:' + item,
            undefined,
            'AppConfigService',
          )
          throw new Error('Error saving configuration parameter:' + item)
        }
      } else {
        // Сохранение конфигурации из базы данных в приложении
        const configValue = existConfigItem.value! as { value: any }

        this.config.set(existConfigItem.key, configValue.value)
      }
    }

    return this.logger.log(
      `Configuration initialized ${colorize('successfully', CONSOLE_COLOR.PRIMARY)}!`,
      'AppConfigService',
    )
  }

  // TODO: Reset configuration

  async getConfig(): Promise<Config[]> {
    return this.prisma.config.findMany()
  }

  async updateConfig(dto: UpdateConfigDto): Promise<Config | APIError> {
    const isExistConfig = await this.prisma.config.findUnique({
      where: {
        key: dto.key,
      },
    })

    if (!isExistConfig)
      return new APIError(
        HttpStatus.BAD_REQUEST,
        'Некорректные данные конфигурации',
      )

    const updatedConfig = await this.prisma.config.update({
      where: {
        key: dto.key,
      },
      data: {
        value: dto.value
          ? {
              value: dto.value,
            }
          : undefined,
        label: dto.label ? dto.label.trim() : undefined,
      },
    })

    if (!updatedConfig)
      return new APIError(
        HttpStatus.BAD_REQUEST,
        'Некорректные данные конфигурации',
      )

    if (dto.value) {
      const previousValue = this.config.get(dto.key)

      this.config.set(dto.key, dto.value)

      this.logger.warn(
        `Configuration ${colorize('"' + dto.key + '"', CONSOLE_COLOR.PRIMARY)} ${colorize('updated!', CONSOLE_COLOR.WARN)}`,
        'AppConfigService',
      )
      this.logger.warn(
        `Last value: ${colorize(JSON.stringify(previousValue), CONSOLE_COLOR.PRIMARY)}`,
        'AppConfigService',
      )
      this.logger.warn(
        `Current value: ${colorize(JSON.stringify(dto.value), CONSOLE_COLOR.PRIMARY)}`,
        'AppConfigService',
      )
    }
    return updatedConfig
  }
}
