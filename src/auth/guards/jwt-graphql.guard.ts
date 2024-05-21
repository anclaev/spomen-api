import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'

/**
 * GraphQL-гард авторизации пользователя по JWT-токену
 */
@Injectable()
export class JwtGraphQLGuard extends AuthGuard('jwt') {
  /**
   * Получение запроса из контекста GraphQL
   * @param {ExecutionContext} context Контекст выполнения
   * @returns {Request} Объект запроса Express
   */
  getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req as Request
  }
}
