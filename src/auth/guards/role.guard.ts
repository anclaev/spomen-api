import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common'
import { Role } from '@prisma/client'

import { RequestWithUser } from '@interfaces/request'

/**
 * Гард для проверки роли пользователя
 * @param {Role[]} roles Массив разрешённых ролей
 */
export const RoleGuard = (roles?: Role[]): Type<CanActivate> => {
  class RoleGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext) {
      const { user } = context.switchToHttp().getRequest<RequestWithUser>()

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
