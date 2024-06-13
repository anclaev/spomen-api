export type VK_API_ERROR = {
  error_code: number
  error_msg: string
  request_params: [
    {
      [key: string]: string
    },
  ]
  status: number
  message: string
  name: string
}

export type VK_API_RESPONSE<T> = {
  response: T
  error: VK_API_ERROR
}

export type VKID_OPTIONS = {
  url: string
  version: string
  access: string
  service: string
}

export type VKID_AUTH_RESPONSE = {
  uuid: string
  silent_token: string
}

export type VKID_EXCHANGE_TOKEN_RESPONSE = {
  access_token: string
  access_token_id: string
  user_id: number
  phone?: string
  phone_validated?: string
  is_service?: boolean
  email?: string
  source: number
  source_description: string
  expires_in: number
}

export class VKIDFactory {
  private url: string
  private version: string
  private access: string
  private service: string

  constructor(options: VKID_OPTIONS) {
    this.url = options.url
    this.version = options.version
    this.access = options.access
    this.service = options.service
  }

  getExchangeTokenUrl({ silent_token, uuid }: VKID_AUTH_RESPONSE): URL {
    return new URL(
      `${this.url}method/auth.exchangeSilentAuthToken/?v=${this.version}&token=${silent_token}&access_token=${this.service}&uuid=${uuid}`,
    )
  }
}
