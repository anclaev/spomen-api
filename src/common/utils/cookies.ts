import { Response } from 'express'

/**
 * Опции cookies
 */
export type CookiesOptions = {
  key: string
  value: string
  path: string
  domain: string
  expires?: string
  secure?: boolean
  httpOnly?: boolean
  maxAge?: number
}

/**
 * Cookies
 */
export class Cookies {
  /**
   * Ключ кук
   */
  key: string

  /**
   * Значение кук
   */
  value: string

  /**
   * Путь доступа кук
   */
  path: string

  /**
   * Поддерживаемый домен кук
   */
  domain: string

  /**
   * Флаг HTTP(S) кук
   * @default true
   */
  secure?: boolean

  /**
   * Срок действия кук
   */
  expires?: string

  /**
   * Время жизни кук
   */
  maxAge?: number

  /**
   * Флаг поддерживаемого протокола
   * @default true
   */
  httpOnly?: boolean

  /**
   * Конструктор кук
   * @param {CookiesOptions} options Опции кук
   */
  constructor(options: CookiesOptions) {
    this.key = options.key
    this.value = options.value
    this.path = options.path
    this.domain = options.domain
    this.expires = options.expires
    this.maxAge = options.maxAge
    this.secure = options.secure ?? true
    this.httpOnly = options.httpOnly ?? true
  }

  /**
   * Форматирование куки в строку
   * @returns {String} Строка куки
   */
  toString(): string {
    return `${this.key}=${this.value}; ${this.httpOnly ? 'HttpOnly;' : ''} ${
      this.secure ? 'Secure;' : ''
    } Path=${this.path}; ${this.expires ? 'Expires=' + this.expires + ';' : ''} Domain=${this.domain}${this.maxAge ? `; Max-Age=${this.maxAge};` : ''}`
  }
}

export const injectCookies = (res: Response, cookies: Cookies[]): Response => {
  return res.setHeader(
    'Set-Cookie',
    cookies.map((cookie) => cookie.toString()),
  )
}
