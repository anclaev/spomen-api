/**
 * Опции cookies
 */
export type CookiesOptions = {
  key: string
  value: string
  path: string
  domain: string
  maxAge?: string
  secure?: boolean
  httpOnly?: boolean
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
  maxAge?: string

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
    } Path=${this.path}; ${this.maxAge ? 'Max-Age=' + this.maxAge + ';' : ''} Domain=${this.domain}`
  }
}
