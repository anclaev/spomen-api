import { Injectable } from '@nestjs/common'
import { Account } from '@prisma/client'

import { AccountRepository } from './account.repository'

/**
 * Сервис аккаунта
 */
@Injectable()
export class AccountService {
  /**
   * Конструктор сервиса аккаунта
   * @param {AccountRepository} account Репозиторий аккаунта
   */
  constructor(private readonly account: AccountRepository) {}

  /**
   * Получение аккаунта по ID
   * @param {String} id ID аккаунта
   * @returns {Account | null} Аккаунт в базе данных
   */
  async findOne(id: string): Promise<Account | null> {
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
