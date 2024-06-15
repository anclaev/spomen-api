import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

import { User } from '@interfaces/user'

/**
 * Получение пользователя из контекста Express
 * @param {ExecutionContext} ctx Контекст Express
 * @returns {Auth} user Текущий пользователь
 */
const getCurrentUserByContext = (ctx: ExecutionContext): User => {
  if (ctx.getType() === 'http') {
    return ctx.switchToHttp().getRequest().user
  }

  const gqlCtx = GqlExecutionContext.create(ctx)
  return gqlCtx.getContext().req.user
}

/**
 * Декоратор для получения текущего пользователя в GraphQL
 */
export const UseGqlUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => getCurrentUserByContext(ctx),
)
