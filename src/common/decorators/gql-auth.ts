import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { Role } from '@prisma/client'

import { GqlJwtGuard } from '@/auth/guards/gql-jwt.guard'
import { GqlRoleGuard } from '@/auth/guards/gql-role.guard'

/**
 * Декоратор для авторизации в GraphQL
 * @param {Role[]} roles Массив разрешённых ролей пользователя
 */
export const UseGqlAuth = (roles?: Role[]) =>
  applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(GqlJwtGuard),
    UseGuards(GqlRoleGuard(roles)),
  )
