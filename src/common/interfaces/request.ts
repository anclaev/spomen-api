import { Request as ExpressRequest } from 'express'

import { User } from './user'

/**
 * Переопределённый запрос Express
 * @description С поддержкой авторизационных cookies.
 */
export interface Request extends ExpressRequest {
  /**
   * Присоединённые куки
   */
  cookies: {
    /**
     * Авторизационная кука
     */
    Authentication?: string
  }
}

/**
 * Запрос с текущим пользователем
 */
export interface RequestWithUser extends Request {
  /**
   * Текущий пользователь систеымы
   */
  user: User
}
