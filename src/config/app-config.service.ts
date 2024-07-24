import { Injectable, Logger } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'

import { ConfigService } from '@/config/config.service'

import { colorize } from '@utils/funcs'

import { CONSOLE_COLOR } from '@enums/console-color'

import * as APP_CONFIG_DEFAULT from './app-config.default.json'

/**
 * Лимиты загрузок по-умолчанию
 */
export const DEFAULT_UPLOADS_LIMIT: [
  {
    [key: string]: number
  },
] = [
  {
    Default: 30,
    Public: 30,
    Administrator: 100,
  },
]

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
              value: typeof value === 'object' ? value : { value },
            },
          })
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
        this.config.set(existConfigItem.key, existConfigItem.value)
      }
    }

    return this.logger.log(
      `Configuration initialized ${colorize('successfully', CONSOLE_COLOR.PRIMARY)}!`,
      'AppConfigService',
    )
  }
}
