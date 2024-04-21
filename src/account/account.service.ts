import { Injectable } from '@nestjs/common'

import { AccountRepository } from './account.repository'

@Injectable()
export class AccountService {
  constructor(private readonly account: AccountRepository) {}

  async findOne(id: string) {
    return await this.account.findOne({ where: { id } })
  }

  // create(AccountCreateInput: AccountCreateInput) {
  //   return 'This action adds a new account'
  // }

  // findAll() {
  //   return `This action returns all account`
  // }

  // update(id: number, updateAccountInput: UpdateAccountInput) {
  //   return `This action updates a #${id} account`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} account`
  // }
}
