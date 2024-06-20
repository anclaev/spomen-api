import { Account } from '@prisma/client'

/**
 * Модель пользователя
 * @description Аккаунт без авторизационных данных.
 */
export type User = Omit<Account, 'password'>

/**
 * Модель авторизованного пользователя
 * @description Пользователь с токеном доступа.
 */
export interface AuthenticatedUser extends User {
  /**
   * Токен доступа
   */
  access_token: string

  /**
   * Токен обновления
   */
  refresh_token: string

  /**
   * Тип токена
   */
  token_type: string
}
