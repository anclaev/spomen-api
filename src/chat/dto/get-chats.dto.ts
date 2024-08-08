import { ChatWhereInput } from '@graphql'

import { PaginationWithFilters } from '@interfaces/pagination'
import { AuthenticatedUser } from '@interfaces/user'

/**
 * Параметры получения списка чатов
 */
export class GetChatsDto extends PaginationWithFilters<ChatWhereInput> {
  /**
   * Текущий пользователь системы
   */
  user: AuthenticatedUser
}
