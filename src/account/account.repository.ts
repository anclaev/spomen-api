import { Account, Prisma } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'

import {
  CreateOneAccountArgs,
  DeleteOneAccountArgs,
  FindUniqueAccountArgs,
  UpdateOneAccountArgs,
} from '@graphql'

// Интерфейсы
import { Pagination } from '@interfaces/pagination'
import { AccountFilters } from '@interfaces/account'
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
   * Доступ к модели Prisma
   */
  get model() {
    return this.prisma.account
  }

  /**
   * Получение списка аккаунтов по фильтрам
   * @param {Pagination} args Параметры пагинации
   * @param {AccountFilters} filters Фильтры
   * @returns {Account[]} Список аккаунтов
   */
  async getPaginated(
    args: Pagination,
    filters: AccountFilters,
  ): Promise<Account[]> {
    const { size, page } = args

    return this.prisma.account.findMany({
      where: filters
        ? {
            username: filters.username ? filters.username : undefined,
            email: filters.email ? filters.email : undefined,
            first_name: filters.first_name ? filters.first_name : undefined,
            last_name: filters.last_name ? filters.last_name : undefined,
            birthday: filters.birthday ? filters.birthday : undefined,
            roles: filters.roles ? filters.roles : undefined,
            sex: filters.sex ? filters.sex : undefined,
          }
        : undefined,
      include: {
        avatar: true,
      },
      orderBy: {
        created_at: 'desc',
      },
      take: size,
      skip: size * (page - 1),
    })
  }

  /**
   * Получение аккаунта по уникальному полю
   * @param {FindUniqueAccountArgs} args Уникальные поля для отбора
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

  /**
   * Удаление аккаунта в базе данных
   * @param {DeleteOneAccountArgs} args Поля отбора аккаунта
   * @returns {Account} Удалённный аккаунт
   */
  async delete(args: DeleteOneAccountArgs): Promise<Account> {
    return this.prisma.account.delete(args)
  }

  /**
   * Удаление аккаунта в базе данных
   * @param {DeleteOneAccountArgs} args Поля отбора аккаунта
   * @returns {DeleteManyAccountArgs} Количество удалённых аккаунтов
   */
  async deleteMany(
    args: Omit<DeleteOneAccountArgs, 'where'>,
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.account.deleteMany(args)
  }
}
