import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'

import { Account } from '@prisma/client'

import {
  CreateOneAccountArgs,
  FindManyAccountArgs,
  FindUniqueAccountArgs,
  UpdateOneAccountArgs,
} from '@graphql/index'

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
   * Создание аккаунта в базе данных
   * @param {CreateOneAccountArgs} args Данные нового аккаунта
   * @returns {Account | null} Созданный аккаунт
   */
  async create(args: CreateOneAccountArgs): Promise<Account | null> {
    const alreadyExist = await this.findOne({
      where: { login: args.data.login },
    })

    if (alreadyExist) return null

    return await this.prisma.account.create(args)
  }

  /**
   * Обновление аккаунта в базе данных
   * @param {UpdateOneAccountArgs} args Данные для обновления
   * @returns {Account | null} Обновлённый аккаунт
   */
  async update(args: UpdateOneAccountArgs): Promise<Account | null> {
    return await this.prisma.account.update(args)
  }

  /**
   * Получение аккаунта по уникальному полю
   * @param {FindUniqueAccountArgs} args Уникальные поля для отбора
   * @returns {Account | null} Аккаунт в системе
   */
  async findOne(args: FindUniqueAccountArgs): Promise<Account | null> {
    return await this.prisma.account.findUnique(args)
  }

  /**
   * Получение множества аккаунтов по полям отбора
   * @param {FindManyAccountArgs} args Поля для отбора
   * @returns {Account[]} Аккаунты в системе
   */
  async findMany(args: FindManyAccountArgs): Promise<Account[]> {
    return await this.prisma.account.findMany(args)
  }
}
