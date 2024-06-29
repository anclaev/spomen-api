import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { Role } from '@prisma/client'

import { RoleGuard } from '@/auth/guards/role.guard'

/**
 * Декоратор для доступа по ролям
 * @param {Role[]} roles Массив разрешённых ролей пользователя
 */
export const UseRoles = (roles?: Role[]) =>
  applyDecorators(SetMetadata('roles', roles), UseGuards(RoleGuard(roles)))
