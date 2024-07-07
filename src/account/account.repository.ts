import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { Account } from '@prisma/client'

import {
  AccountOrderByWithRelationInput,
  CreateOneAccountArgs,
  AccountWhereInput,
} from '@graphql'

// Интерфейсы
import { AccountFindUniqueDto, AccountUpdateDto } from '@interfaces/account'
import { PaginatedResult } from '@interfaces/pagination'

// Утилиты
import { paginator } from '@utils/paginator'

/**
 * Репозиторий аккаунта
 * @description Для работы с базой данных средствами Prisma
 */
@Injectable()
export class AccountRepository {
  /**
   * Конструктор репозитория аккаунта
   * @param {PrismaService} prisma Сервис для работы с БД
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Получение аккаунта по уникальному полю
   * @param {AccountFindUniqueDto} args Уникальные поля для отбора
   * @returns {Account} Загрузка в системе
   */
  async findOne(args: AccountFindUniqueDto): Promise<Account | null> {
    return this.prisma.account.findUnique(args)
  }

  /**
   * Получение множества аккаунтов по полям отбора
   * @param {FindManyAccountArgs} args Поля для отбора
   * @returns {Account[]} Загрузки в базе данных
   */
  async findMany({
    where,
    orderBy,
    page,
    size = 10,
  }: {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput
    page?: number
    size?: number
  }): Promise<PaginatedResult<Account[]>> {
    return paginator({
      page,
      perPage: size,
    })(
      this.prisma.account,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    )
  }
  /**
   * Создание аккаунта в базе данных
   * @param {CreateOneAccountArgs} args Данные нового аккаунта
   * @returns {Account} Созданный аккаунт
   */
  async create(args: CreateOneAccountArgs): Promise<Account> {
    return this.prisma.account.create(args)
  }

  /**
   * Обновление аккаунта в базе данных
   * @param {UpdateOneAccountArgs} args Данные для обновления
   * @returns {Account} Обновлённый аккаунт
   */
  async update(args: AccountUpdateDto): Promise<Account> {
    return this.prisma.account.update(args)
  }
}
