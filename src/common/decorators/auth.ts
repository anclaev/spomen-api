import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { Role } from '@prisma/client'

import { RoleGuard } from '@/auth/guards/role.guard'
import { JwtGuard } from '@/auth/guards/jwt.guard'

/**
 * Декоратор для авторизации
 * @param {Role[]} roles Массив разрешённых ролей пользователя
 */
export const UseAuth = (roles?: Role[]) =>
  applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(JwtGuard),
    UseGuards(RoleGuard(roles)),
  )
