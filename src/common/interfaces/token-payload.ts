/**
 * Авторизационные данные пользователя
 */
export type TokenPayload = {
  user_id: string
  login: string
  email: string | null
  vk_id: string | null
  vk_avatar: string | null
  vk_access_token: string | null
}
