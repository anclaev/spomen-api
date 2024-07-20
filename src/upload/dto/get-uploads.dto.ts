import { UploadWhereInput } from '@graphql'

import { AuthenticatedUser } from '@interfaces/user'
import { PaginationDto } from '@interfaces/dto'

/**
 * Параметры получения списка загрузок
 */
export class GetUploadsDto extends PaginationDto<UploadWhereInput> {
  /**
   * Текущий пользователь системы
   */
  user: AuthenticatedUser
}
