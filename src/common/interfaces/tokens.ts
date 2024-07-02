export interface Tokens {
  /**
   * Токен доступа
   */
  access_token: string

  /**
   * Токен обновления
   */
  refresh_token: string
}

export interface TokensResponse extends Tokens {}

/**
 * Авторизационные данные пользователя
 */
export type TokenPayload = {
  userid: string
  username: string
  email: string | null
  vk_id: string | null
  vk_avatar: string | null
  vk_access_token: string | null
}
