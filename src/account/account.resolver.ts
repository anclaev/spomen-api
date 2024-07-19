import { Resolver, Args, Query } from '@nestjs/graphql'
import { Account } from '@graphql'

// Декораторы
import { UseGqlAuth } from '@decorators/gql-auth'

// Сервисы
import { AccountService } from './account.service'
import { APIError } from '@interfaces/api-error'
import { HttpException } from '@nestjs/common'

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
   * @returns {Account} Аккаунт в системе
   */
  @UseGqlAuth()
  @Query(() => Account, { name: 'accountById' })
  async findOneById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Account> {
    const account = await this.account.getById(id)

    return this.catchError<Account>(account)
  }

  /**
   * Запрос на получение аккаунта по имени пользователя
   * @param {String} username Имя аккаунта
   * @returns {Account} Аккаунт в системе
   */
  @UseGqlAuth()
  @Query(() => Account, { name: 'account' })
  async getByUsername(
    @Args('username', { type: () => String }) username: string,
  ): Promise<Account> {
    const account = await this.account.getByUsername(username)

    return this.catchError<Account>(account)
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

  /**
   * Обработчик ошибок
   * @param {unknown | APIError} data Результат запроса
   * @returns {unknown} Обработанный запрос
   */
  private catchError<T>(data: T | APIError): T {
    if (data instanceof APIError) {
      throw new HttpException(data.message, data.status)
    }

    return data
  }
}
