import { Resolver, Args, Query, Mutation } from '@nestjs/graphql'
import { HttpException } from '@nestjs/common'

import {
  Account,
  AccountWhereInput,
  AccountUpdateInput,
  AccountWhereUniqueInput,
} from '@graphql'

// Декораторы
import { UseGqlAuth } from '@decorators/gql-auth'
import { UseGqlUser } from '@decorators/gql-user'

// Сервисы
import { AccountService } from './account.service'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'

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
   * Получение аккаунта по полям отбора
   * @param {AccountWhereUniqueInput} where Поля отбора
   * @returns {Account} Аккаунт
   */
  @UseGqlAuth()
  @Query(() => Account, { name: 'account' })
  async getAccount(
    @Args('where', { type: () => AccountWhereUniqueInput })
    where: AccountWhereUniqueInput,
  ): Promise<Account> {
    const account = await this.account.getAccount(where)

    return this.catchError<Account>(account)
  }

  /**
   * Получение списка аккаунтов
   * @param {number} page Текущая страница
   * @param {number} size Размер страницы
   * @param filters Фильтры отбора
   * @returns {Account[]} Список аккаунтов
   */
  @UseGqlAuth()
  @Query(() => [Account], { name: 'accounts' })
  async accounts(
    @Args('size', { type: () => Number, defaultValue: 10 }) size: number,
    @Args('page', { type: () => Number, defaultValue: 1 }) page: number,
    @Args('filters', {
      type: () => AccountWhereInput,
      nullable: true,
    })
    filters: AccountWhereInput,
  ): Promise<Account[]> {
    const accounts = await this.account.getAccounts({ size, page, filters })

    return this.catchError<Account[]>(accounts)
  }

  /**
   * Изменение аккаунта
   * @param {AccountUpdateInput} data Данные для изменения
   * @param {AccountWhereUniqueInput} where Поля отбора
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Account} Изменённый аккаунт
   */
  @UseGqlAuth()
  @Mutation(() => Account, { name: 'updateAccount' })
  async updateAccount(
    @Args('data', { type: () => AccountUpdateInput })
    data: AccountUpdateInput,
    @Args('where', { type: () => AccountWhereUniqueInput })
    where: AccountWhereUniqueInput,
    @UseGqlUser() user: AuthenticatedUser,
  ): Promise<Account> {
    const updatedAccount = await this.account.updateAccount(data, where, user)

    return this.catchError<Account>(updatedAccount)
  }

  /**
   * Удаление аккаунта
   * @param {AccountWhereUniqueInput} where Поля отбора аккаунта
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Account} Удалённый аккаунт
   */
  @UseGqlAuth()
  @Mutation(() => Account, { name: 'deleteAccount' })
  async deleteAccount(
    @Args('where', { type: () => AccountWhereUniqueInput })
    where: AccountWhereUniqueInput,
    @UseGqlUser() user: AuthenticatedUser,
  ): Promise<Account> {
    const deletedAccount = await this.account.deleteAccount(where, user)

    return this.catchError<Account>(deletedAccount)
  }

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
