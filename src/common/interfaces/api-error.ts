import { HttpStatus } from '@nestjs/common'

/**
 * Собственный класс ошибки над базовым Error
 */
export class APIError extends Error {
  /**
   * Код ошибки
   */
  readonly status: HttpStatus

  /**
   * Конструктор класса ошибки
   * @param {HttpStatus} status Код ошибки
   * @param {string} message Описание ошибки
   */
  constructor(status?: HttpStatus, message?: string) {
    super(message)
    this.status = status ?? HttpStatus.INTERNAL_SERVER_ERROR
  }
}
