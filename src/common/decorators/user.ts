import { createParamDecorator, ExecutionContext } from '@nestjs/common'

/**
 * Декоратор получения текущего пользователя
 * @description Получает пользователя из запроса.
 */
export const UseUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
  },
)
