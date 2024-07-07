import { Account } from '@graphql'

import { TokensResponse } from './tokens'

/**
 * Модель пользователя
 * @description Аккаунт без авторизационных данных
 */
export type User = Omit<Account, 'password' | 'refresh_tokens'>

/**
 * Модель авторизованного пользователя
 * @description Пользователь с токеном доступа
 */
export interface AuthenticatedUser extends User, TokensResponse {}
