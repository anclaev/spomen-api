import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { Role } from '@prisma/client'

import { GqlRoleGuard } from '@/auth/guards/gql-role.guard'

/**
 * Декоратор для доступа в GraphQL по ролям
 * @param {Role[]} roles Массив разрешённых ролей пользователя
 */
export const UseGqlRoles = (roles?: Role[]) =>
  applyDecorators(SetMetadata('roles', roles), UseGuards(GqlRoleGuard(roles)))
