import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'

import { AccountCreateInput } from '@graphql/account/account-create.input'
import { Account } from '@graphql/account/account.model'

import { AccountService } from './account.service'
@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation(() => Account)
  createAccount(
    @Args('accountCreateInput') AccountCreateInput: AccountCreateInput,
  ) {
    return this.accountService.create(AccountCreateInput)
  }

  @Query(() => [Account], { name: 'account' })
  findAll() {
    return this.accountService.findAll()
  }

  // @Query(() => Account, { name: 'account' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.accountService.findOne(id)
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
