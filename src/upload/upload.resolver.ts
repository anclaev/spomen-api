import {
  Upload,
  UploadUpdateInput,
  UploadWhereInput,
  UploadWhereUniqueInput,
} from '@graphql'

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { HttpException } from '@nestjs/common'

// Декораторы
import { UseGqlAuth } from '@decorators/gql-auth'
import { UseGqlUser } from '@decorators/gql-user'

// Сервисы
import { UploadService } from './upload.service'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'

/**
 * Ресольвер загрузок
 */
@Resolver(() => Upload)
export class UploadResolver {
  /**
   * Конструктор ресольвера загрузок
   * @param {UploadService} upload Сервис загрузок
   */
  constructor(private readonly upload: UploadService) {}

  /**
   * Запрос на получение загрузки по ID
   * @param {UploadWhereUniqueInput} where Данные для поиска
   * @returns {Upload} Загрузка
   */
  @UseGqlAuth()
  @Query(() => Upload, { name: 'upload' })
  async getUpload(
    @Args('where', { type: () => UploadWhereUniqueInput })
    where: UploadWhereUniqueInput,
  ): Promise<Upload> {
    const upload = await this.upload.getUpload(where)

    return this.catchError<Upload>(upload)
  }

  /**
   * Получение списка загрузок
   * @param {number} page Текущая страница
   * @param {number} size Размер страницы
   * @param filters Фильтры отбора
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Upload[]} Список  загрузок
   */
  @UseGqlAuth()
  @Query(() => [Upload], { name: 'uploads' })
  async uploads(
    @Args('size', { type: () => Number, defaultValue: 10 }) size: number,
    @Args('page', { type: () => Number, defaultValue: 1 }) page: number,
    @Args('filters', {
      type: () => UploadWhereInput,
      nullable: true,
    })
    filters: UploadWhereInput,
    @UseGqlUser() user: AuthenticatedUser,
  ): Promise<Upload[]> {
    const uploads = await this.upload.getUploads({
      user,
      filters,
      page,
      size,
    })

    return this.catchError<Upload[]>(uploads)
  }

  /**
   * Изменение загрузки
   * @param {UploadUpdateInput} data Данные для изменения
   * @param {UploadWhereUniqueInput} where Условие поиска
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Upload} Изменённая загрузка
   */
  @UseGqlAuth()
  @Mutation(() => Upload, { name: 'updateUpload' })
  async updateUpload(
    @Args('data', { type: () => UploadUpdateInput })
    data: UploadUpdateInput,
    @Args('where', { type: () => UploadWhereUniqueInput })
    where: UploadWhereUniqueInput,
    @UseGqlUser()
    user: AuthenticatedUser,
  ): Promise<Upload> {
    const updatedUpload = await this.upload.updateUpload(data, where, user)

    return this.catchError<Upload>(updatedUpload)
  }

  /**
   * Удаление загрузки
   * @param {UploadWhereUniqueInput} where Условие поиска
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Upload} Удалённая загрузка
   */
  @UseGqlAuth()
  @Mutation(() => Upload, { name: 'deleteUpload' })
  async deleteUpload(
    @Args('where', { type: () => UploadWhereUniqueInput })
    where: UploadWhereUniqueInput,
    @UseGqlUser()
    user: AuthenticatedUser,
  ): Promise<Upload> {
    const deletedUpload = await this.upload.deleteUpload(where, user)

    return this.catchError<Upload>(deletedUpload)
  }

  /**
   * Получение списка расширений загрузок
   * @param {number} size Количество элементов
   * @param {number} page Текущая страница
   * @returns {string[]} Список расширений
   */
  @UseGqlAuth()
  @Query(() => [String], { name: 'getExtensions' })
  async getExtensions(
    @Args('size', { type: () => Number, defaultValue: 10 }) size: number,
    @Args('page', { type: () => Number, defaultValue: 1 }) page: number,
  ): Promise<string[]> {
    const extensions = await this.upload.getExtensionsList({ size, page })

    return this.catchError<string[]>(extensions)
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
