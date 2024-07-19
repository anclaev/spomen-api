import { Prisma, Upload } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'

import {
  UploadOrderByWithRelationInput,
  CreateOneUploadArgs,
  DeleteManyUploadArgs,
  DeleteOneUploadArgs,
  FindUniqueUploadArgs,
  UpdateOneUploadArgs,
  UploadWhereInput,
} from '@graphql'

// Интерфейсы
import { PaginatedResult } from '@interfaces/pagination'
import { DeleteManyResult } from '@interfaces/prisma'
import { ToPrisma } from '@interfaces/prisma'

// Утилиты
import { paginator } from '@utils/paginator'

/**
 * Репозиторий загрузок
 * @description Для работы с базой данных средствами Prisma
 */
@Injectable()
export class UploadRepository {
  /**
   * Конструктор репозитория загрузок
   * @param {PrismaService} prisma Сервис для работы с БД
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Получение загрузки по уникальному полю
   * @param {FindUniqueUploadArgs} args Уникальные поля для отбора
   * @returns {Upload} Загрузка в базе данных
   */
  async findOne(
    args: ToPrisma<
      FindUniqueUploadArgs,
      Prisma.UploadSelect,
      Prisma.UploadInclude
    >,
  ): Promise<Upload | null> {
    return await this.prisma.upload.findUnique(args)
  }

  /**
   * Получение множества загрузок по полям отбора
   * @param {FindManyUploadArgs} args Поля для отбора
   * @returns {Account[]} Загрузки в базе данных
   */
  async findMany({
    where,
    orderBy,
    page,
    size = 10,
  }: {
    where?: UploadWhereInput
    orderBy?: UploadOrderByWithRelationInput
    page?: number
    size?: number
  }): Promise<PaginatedResult<Upload[]>> {
    return paginator({
      page,
      perPage: size,
    })(
      this.prisma.upload,
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
   * Создание загрузки в базе данных
   * @param {CreateOneUploadArgs} args Данные новой загрузки
   * @returns {Upload} Созданная загрузка
   */
  async create(args: CreateOneUploadArgs): Promise<Upload> {
    return this.prisma.upload.create(args)
  }

  /**
   * Обновление загрузки в базе данных
   * @param {UpdateOneUploadArgs} args Данные для обновления
   * @returns {Upload} Обновлённая загрузка
   */
  async update(args: UpdateOneUploadArgs): Promise<Upload> {
    return this.prisma.upload.update(args)
  }

  /**
   * Удаление загрузки в базе данных
   * @param {DeleteOneUploadArgs} args Поля отбора загрузки
   * @returns {Upload} Удалённая загрузка
   */
  async delete(args: DeleteOneUploadArgs): Promise<Upload> {
    return this.prisma.upload.delete(args)
  }

  /**
   * Удаление загрузки в базе данных
   * @param {DeleteOneUploadArgs} args Поля отбора загрузки
   * @returns {DeleteManyUploadArgs} Количество удалённых загрузок
   */
  async deleteMany(
    args: Omit<DeleteManyUploadArgs, 'where'>,
  ): Promise<DeleteManyResult> {
    return this.prisma.upload.deleteMany(args)
  }
}
