import { AccountWhereInput } from '@graphql'

import { PaginationWithFilters } from '@interfaces/pagination'

/**
 * Параметры получения списка аккаунтов
 */
export class GetAccountsDto extends PaginationWithFilters<AccountWhereInput> {}
