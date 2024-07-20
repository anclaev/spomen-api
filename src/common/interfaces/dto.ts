import { Pagination } from '@decorators/pagination'

export class PaginationDto<T> extends Pagination {
  /**
   * Поля отбора модели
   */
  filter?: T
}
