import { Pagination } from '@decorators/pagination'

import { AuthenticatedUser } from '@interfaces/user'

/**
 * Параметры получения списка загрузок
 */
export class GetUploadsDto {
  /**
   * Опции пагинации
   */
  pagination: Pagination

  /**
   * Текущий пользователь системы
   */
  user: AuthenticatedUser
}
