import { Args, Query, Resolver } from '@nestjs/graphql'
import { HttpException } from '@nestjs/common'
import { Chat, ChatWhereInput } from '@graphql'

import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'

import { UseGqlAuth } from '@decorators/gql-auth'
import { UseGqlUser } from '@decorators/gql-user'

import { ChatService } from '@/chat/chat.service'

/**
 * Ресольвер чатов
 */
@Resolver(() => Chat)
export class ChatResolver {
  /**
   * Конструктор ресольвера чатов
   * @param {ChatService} chat Сервис чатов
   */
  constructor(private readonly chat: ChatService) {}

  /**
   * Получение списка чатов
   * @param {number} page Текущая страница
   * @param {number} size Размер страницы
   * @param filters Фильтры отбора
   * @param {AuthenticatedUser} user Текущий пользователь системы
   * @returns {Chat[]} Список чатов
   */
  @UseGqlAuth()
  @Query(() => Chat, { name: 'chats' })
  async getChats(
    @Args('size', { type: () => Number, defaultValue: 10 }) size: number,
    @Args('page', { type: () => Number, defaultValue: 1 }) page: number,
    @Args('filters', {
      type: () => ChatWhereInput,
      nullable: true,
    })
    filters: ChatWhereInput,
    @UseGqlUser()
    user: AuthenticatedUser,
  ): Promise<Chat[]> {
    const chats = await this.chat.getChats({ user, size, page, filters })

    return this.catchError<Chat[]>(chats)
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
