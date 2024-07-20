import {
  CreateOneAccountArgs,
  FindUniqueAccountArgs,
  UpdateOneAccountArgs,
} from '@graphql'

import { Account, Prisma } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'

import { ToPrisma } from '@interfaces/prisma'

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
   * Получение модели аккаунта Prisma
   */
  get model() {
    return this.prisma.account
  }

  /**
   * Получение аккаунта по уникальному полю
   * @param {AccountFindUniqueDto} args Уникальные поля для отбора
   * @returns {Account} Загрузка в системе
   */
  async findOne(
    args: ToPrisma<
      FindUniqueAccountArgs,
      Prisma.AccountSelect,
      Prisma.AccountInclude
    >,
  ): Promise<Account | null> {
    return this.prisma.account.findUnique(args)
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
  async update(args: UpdateOneAccountArgs): Promise<Account> {
    return this.prisma.account.update(args)
  }
}
