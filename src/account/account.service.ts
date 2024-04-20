import { Injectable } from '@nestjs/common'

import { AccountCreateInput } from '@graphql/account/account-create.input'

@Injectable()
export class AccountService {
  create(AccountCreateInput: AccountCreateInput) {
    return 'This action adds a new account'
  }

  findAll() {
    return `This action returns all account`
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} account`
  // }

  // update(id: number, updateAccountInput: UpdateAccountInput) {
  //   return `This action updates a #${id} account`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} account`
  // }
}
