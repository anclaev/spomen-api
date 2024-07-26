import { Prisma, Upload } from '@prisma/client'
import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'

import {
  CreateOneUploadArgs,
  DeleteManyUploadArgs,
  DeleteOneUploadArgs,
  FindUniqueUploadArgs,
  UpdateOneUploadArgs,
} from '@graphql'

// Интерфейсы
import { Pagination } from '@interfaces/pagination'
import { UploadFilters } from '@interfaces/upload'
import { ToPrisma } from '@interfaces/prisma'

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
   * Доступ к модели Prisma
   */
  get model() {
    return this.prisma.upload
  }

  /**
   * Получение списка загрузок по фильтрам
   * @param {Pagination} args Параметры пагинации
   * @param {UploadFilters} filters Фильтры
   * @returns {Upload[]} Список загрузок
   */
  async getPaginated(
    args: Pagination,
    filters: UploadFilters,
  ): Promise<Upload[]> {
    const { size, page } = args

    return this.prisma.upload.findMany({
      where: filters
        ? {
            ext: filters.ext ? filters.ext : undefined,
            name: filters.name ? filters.name : undefined,
            owner: filters.owner ? filters.owner : undefined,
            owner_id: filters.owner_id ? filters.owner_id : undefined,
            is_system: filters.is_system ? filters.is_system : undefined,
            permissions: filters.permissions ? filters.permissions : undefined,
          }
        : undefined,
      include: {
        owner: {
          include: {
            avatar: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
      take: size,
      skip: size * (page - 1),
    })
  }

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
    return this.prisma.upload.findUnique(args)
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
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.upload.deleteMany(args)
  }

  /**
   * Получение списка уникальных расширений
   * @param {Pagination} args Параметры пагинации
   * @returns {{ext: string}[]} Массив объектов с расширениями
   */
  async getDistinctExt({
    page,
    size,
  }: Pagination): Promise<Pick<Upload, 'ext'>[]> {
    return this.prisma.upload.findMany({
      select: {
        ext: true,
      },
      distinct: ['ext'],
      take: size,
      skip: size * (page - 1),
      orderBy: {
        ext: 'asc',
      },
    })
  }
}
