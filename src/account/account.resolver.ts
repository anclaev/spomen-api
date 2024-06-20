import { Resolver, Args, Query, ID } from '@nestjs/graphql'
import { Account } from '@common/graphql/index'

import { UseGqlAuth } from '@decorators/gql-auth'

import { AccountService } from './account.service'

/**
 * Ресольвер аккаунта
 */
@Resolver(() => Account)
export class AccountResolver {
  /**
   * Конструктор ресольвера аккаунта
   * @param {AccountService} account Сервис аккаунта
   */
  constructor(private readonly account: AccountService) {}

  /**
   * Запрос на получение аккаунта по ID
   * @param {String} id ID аккаунта
   * @returns {Account | null} Аккаунт в системе
   */
  @UseGqlAuth()
  @Query(() => Account, { name: 'account' })
  async findOne(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Account | null> {
    return await this.account.findOne(id)
  }

  // @Mutation(() => Account)
  // createAccount(
  //   @Args('accountCreateInput') AccountCreateInput: AccountCreateInput,
  // ) {
  //   return this.account.create(AccountCreateInput)
  // }

  // @Query(() => [Account], { name: 'account' })
  // findAll() {
  //   return this.account.findAll()
  // }

  // @Mutation(() => Account)
  // updateAccount(
  //   @Args('updateAccountInput') updateAccountInput: UpdateAccountInput,
  // ) {
  //   return this.accountService.update(updateAccountInput.id, updateAccountInput)
  // }

  // @Mutation(() => Account)
  // removeAccount(@Args('id', { type: () => Int }) id: number) {
  //   return this.accountService.remove(id)
  // }
}
