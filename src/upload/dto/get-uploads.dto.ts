import { Pagination } from '@decorators/pagination'

import { AuthenticatedUser } from '@interfaces/user'

export class GetUploadsDto {
  pagination: Pagination
  user: AuthenticatedUser
}
