import { Resolver, Args, Query, ID } from '@nestjs/graphql'

import { UseGQLAuth } from '@decorators/auth'

import { Account } from '@graphql/account/account.model'

import { AccountService } from './account.service'

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly account: AccountService) {}

  @UseGQLAuth()
  @Query(() => Account, { name: 'account' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.account.findOne(id)
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
