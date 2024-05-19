import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'

/**
 * GraphQL-гард авторизации пользователя по JWT-токену
 */
@Injectable()
export class JwtGraphQLGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }
}
