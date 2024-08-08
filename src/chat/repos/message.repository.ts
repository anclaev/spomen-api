import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { Chat } from '@prisma/client'

// Интерфейсы
import { Pagination } from '@interfaces/pagination'
import { MessageFilters } from '@interfaces/chat'

/**
 * Репозиторий сообщений
 * @description Для работы с базой данных средствами Prisma
 */
@Injectable()
export class MessageRepository {
  /**
   * Конструктор репозитория сообщений
   * @param {PrismaService} prisma Сервис для работы с БД
   */
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Доступ к модели Prisma
   */
  get model() {
    return this.prisma.chat
  }

  // async getPaginated(
  //   args: Pagination,
  //   filters: MessageFilters
  // ):Promise<Chat[]> {
  //   const {size, page} = args
  // }
}
