import { Exclude } from 'class-transformer'

import { Sex } from '@graphql/prisma/sex.enum'

/**
 * Модель ответа с аккаунтом
 */
export class AccountResponse {
  /**
   * ID аккаунта
   */
  id: string

  /**
   * Логин аккаунта
   */
  login: string

  /**
   * Почта аккаунта
   */
  email?: string

  /**
   * ID аккаунта VK
   */
  vk_id?: string

  /**
   * Аватар аккаунта VK
   */
  vk_pic?: string

  /**
   * Имя пользователя
   */
  name?: string

  /**
   * Фамилия пользователя
   */
  surname?: string

  /**
   * Пол пользователя
   * @description Male, Female
   */
  sex?: Sex

  /**
   * Дата рождения пользователя
   */
  birthday?: Date

  /**
   * Дата создания аккаунта
   */
  createdAt: Date

  /**
   * Дата изменения аккаунта
   */
  updatedAt: Date

  /**
   * Пароль аккаунта
   */
  @Exclude()
  password: string
}
