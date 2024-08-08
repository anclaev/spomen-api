import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { Chat } from '@prisma/client'

// Интерфейсы
import { Pagination } from '@interfaces/pagination'
import { ChatFilters } from '@interfaces/chat'

/**
 * Репозиторий чатов
 * @description Для работы с базой данных средствами Prisma
 */
@Injectable()
export class ChatRepository {
  /**
   * Конструктор репозитория чатов
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
  //   filters: ChatFilters
  // ):Promise<Chat[]> {
  //   const {size, page} = args
  // }
}
