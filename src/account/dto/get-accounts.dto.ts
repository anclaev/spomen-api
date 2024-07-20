import { AccountWhereInput } from '@graphql'

import { PaginationDto } from '@interfaces/dto'

/**
 * Параметры получения списка аккаунтов
 */
export class GetAccountsDto extends PaginationDto<AccountWhereInput> {}
