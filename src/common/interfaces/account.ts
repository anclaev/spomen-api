import { FindUniqueAccountArgs, UpdateOneAccountArgs } from '@graphql'
import { Prisma } from '@prisma/client'
import { ToPrisma } from './prisma'

/**
 * Данные для получения аккаунта
 */
export interface AccountFindUniqueDto
  extends ToPrisma<
    FindUniqueAccountArgs,
    Prisma.AccountSelect,
    Prisma.AccountInclude
  > {}

/**
 * Данные для обновления аккаунта
 */
export interface AccountUpdateDto
  extends ToPrisma<
    UpdateOneAccountArgs,
    Prisma.AccountSelect,
    Prisma.AccountInclude
  > {}
