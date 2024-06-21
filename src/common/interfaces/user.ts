import { Account } from '@prisma/client'
import { TokensResponse } from './tokens'

/**
 * Модель пользователя
 * @description Аккаунт без авторизационных данных.
 */
export type User = Omit<Account, 'password'>

/**
 * Модель авторизованного пользователя
 * @description Пользователь с токеном доступа.
 */
export interface AuthenticatedUser extends User, TokensResponse {}
