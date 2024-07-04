import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { Upload } from '@prisma/client'

import {
  CreateOneUploadArgs,
  DeleteManyUploadArgs,
  DeleteOneUploadArgs,
  FindManyUploadArgs,
  FindUniqueUploadArgs,
  UpdateOneUploadArgs,
} from '@graphql/index'

import { DeleteManyResult } from '@interfaces/prisma'

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
   * @returns {Upload | null} Загрузка в базе данных
   */
  async findOne(args: FindUniqueUploadArgs): Promise<Upload | null> {
    return await this.prisma.upload.findUnique(args)
  }

  /**
   * Получение множества загрузок по полям отбора
   * @param {FindManyUploadArgs} args Поля для отбора
   * @returns {Account[]} Загрузки в базе данных
   */
  async findMany(args: FindManyUploadArgs): Promise<Upload[]> {
    return await this.prisma.upload.findMany(args)
  }

  /**
   * Создание загрузки в базе данных
   * @param {CreateOneUploadArgs} args Данные новой загрузки
   * @returns {Upload | null} Созданная загрузка
   */
  async create(args: CreateOneUploadArgs): Promise<Upload | null> {
    return await this.prisma.upload.create(args)
  }

  /**
   * Обновление загрузки в базе данных
   * @param {UpdateOneUploadArgs} args Данные для обновления
   * @returns {Upload | null} Обновлённая загрузка
   */
  async update(args: UpdateOneUploadArgs): Promise<Upload | null> {
    return await this.prisma.upload.update(args)
  }

  /**
   * Удаление загрузки в базе данных
   * @param {DeleteOneUploadArgs} args Поля отбора загрузки
   * @returns {Upload | null} Удалённая загрузка
   */
  async delete(args: DeleteOneUploadArgs): Promise<Upload | null> {
    return await this.prisma.upload.delete(args)
  }

  /**
   * Удаление загрузки в базе данных
   * @param {DeleteOneUploadArgs} args Поля отбора загрузки
   * @returns {DeleteManyUploadArgs} Количество удалённых загрузок
   */
  async deleteMany(
    args: Omit<DeleteManyUploadArgs, 'where'>,
  ): Promise<DeleteManyResult> {
    return await this.prisma.upload.deleteMany(args)
  }
}
