import { ConfigService as RootService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'

import { ENV } from '@enums/env'

/**
 * Сервис конфигурации
 */
@Injectable()
export class ConfigService extends RootService {
  /**
   * Конструктор сервиса конфигурации
   */
  constructor() {
    super()
  }

  /**
   * Надстройка над методом .get
   * @description Получение значения конфигурации по ключу перечисления
   * @param {ENV} key Ключ конфигурации
   * @returns {unknown} Значение конфигурации
   */
  gett<T>(key: keyof typeof ENV): T {
    return this.get<T>(key) as T
  }

  /**
   * Проверка на боевое окружение
   */
  get isProduction(): boolean {
    return this.gett<string>('NODE_ENV') === 'production'
  }

  /**
   * Текущее окружение
   */
  get environment(): string {
    return this.gett<string>('NODE_ENV')
  }

  /**
   * Порт приложения
   */
  get port(): number {
    return this.gett<number>('PORT')
  }

  /**
   * Эндпойнт API
   */
  get apiEndpoint(): string {
    return this.environment === 'local'
      ? `${this.gett('DOMAIN')}:${this.gett('HOST')}`
      : this.gett('DOMAIN')
  }
}
