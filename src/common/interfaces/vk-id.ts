import { IsNotEmpty, IsString } from 'class-validator'

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

export class VKID_EXCHANGE_TOKEN_PAYLOAD {
  @IsString()
  @IsNotEmpty()
  uuid: string

  @IsString()
  @IsNotEmpty()
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

export type VKID_USERS_GET_PAYLOAD = {
  user_ids: string[]
  fields: VKIDUSER_FIELDS[]
  access_token: string
  name_case?: 'nom' | 'gen' | 'dat' | 'acc' | 'ins' | 'abl'
}

export type VKID_USERS_GET_RESPONSE = VKIDUser[]

export interface VKIDUser {
  id: string
  first_name: string
  last_name: string
  domain: string
  photo_50?: string
  photo_100?: string
  photo_200_orig?: string
  photo_200?: string
  photo_400_orig?: string
  deactivated?: string
  about?: string
  bdate?: string
  screen_name?: string
  sex?: string // Пол, 0 - не указан, 1 - женский, 2 - мужской
  site?: string
  email?: string
  status?: string
  verified?: number // Верифицирована ли страница, 1 - да, 0 - нет
  is_verified?: boolean // Верифицированы ли паспортные данные
  access_token?: string
}

export type VKIDUSER_FIELDS = keyof VKIDUser
