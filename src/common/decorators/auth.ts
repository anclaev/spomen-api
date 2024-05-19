import { UseGuards } from '@nestjs/common'

import { JwtGraphQLGuard } from '@/auth/guards/jwt-graphql.guard'
import JwtGuard from '@/auth/guards/jwt.guard'

/**
 * Декоратор авторизации
 */
export const UseAuth = () => UseGuards(JwtGuard)

/**
 * Декоратор авторизации в GraphQL
 */
export const UseGQLAuth = () => UseGuards(JwtGraphQLGuard)
