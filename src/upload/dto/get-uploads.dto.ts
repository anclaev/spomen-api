import { UploadWhereInput } from '@graphql'

import { PaginationWithFilters } from '@interfaces/pagination'
import { AuthenticatedUser } from '@interfaces/user'

/**
 * Параметры получения списка загрузок
 */
export class GetUploadsDto extends PaginationWithFilters<UploadWhereInput> {
  /**
   * Текущий пользователь системы
   */
  user: AuthenticatedUser
}
