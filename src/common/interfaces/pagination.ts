/**
 * Класс пагинации
 */
export class Pagination {
  /**
   * Текущая страница
   */
  page: number

  /**
   * Размер страницы
   */
  size: number
}

/**
 * Класс пагинации с фильтрами
 */
export class PaginationWithFilters<T> extends Pagination {
  /**
   * Поля отбора модели
   */
  filters?: T
}
