import { Role } from '@prisma/client'

/**
 * Фильтры для отбора аккаунтов
 */
export type AccountFilters = {
  username: any | null
  email: any | null
  first_name: any | null
  last_name: any | null
  birthday: any | null
  sex: any | null
  roles: any | null
}
