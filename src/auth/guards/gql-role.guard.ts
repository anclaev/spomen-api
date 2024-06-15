import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Role } from '@prisma/client'

import { RequestWithUser } from '@interfaces/request'

/**
 * Гард для проверки роли пользователя в GraphQL
 * @param {Role[]} roles Массив разрешённых ролей
 */
export const GqlRoleGuard = (roles?: Role[]): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(ctx: ExecutionContext) {
      const GqlCtx = GqlExecutionContext.create(ctx).getContext()
      const { user } = GqlCtx.req as RequestWithUser

      if (roles) {
        const acceptedRoles = user.roles.filter(
          (val) => roles.indexOf(val) !== -1,
        )

        return acceptedRoles.length > 0
      }

      return true
    }
  }

  return mixin(RoleGuardMixin)
}
