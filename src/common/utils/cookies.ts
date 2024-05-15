type CookiesOptions = {
  key: string
  value: string
  path: string
  domain: string
  secure?: boolean
  maxAge?: string
  httpOnly?: boolean
}

export class Cookies {
  key: string
  value: string
  path: string
  domain: string
  secure?: boolean
  maxAge?: string
  httpOnly?: boolean

  constructor(options: CookiesOptions) {
    this.key = options.key
    this.value = options.value
    this.path = options.path
    this.domain = options.domain
    this.maxAge = options.maxAge
    this.secure = options.secure ?? true
    this.httpOnly = options.httpOnly ?? true
  }

  toString() {
    return `${this.key}=${this.value}; ${this.httpOnly ? 'HttpOnly;' : ''} ${
      this.secure ? 'Secure;' : ''
    } Path=${this.path}; Max-Age=${this.maxAge}; Domain=${this.domain}`
  }
}
