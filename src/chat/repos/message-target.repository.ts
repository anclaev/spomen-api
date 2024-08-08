import { PrismaService } from 'nestjs-prisma'
import { Injectable } from '@nestjs/common'
import { Chat } from '@prisma/client'

// Интерфейсы
import { Pagination } from '@interfaces/pagination'
import { MessageTargetFilters } from '@interfaces/chat'

/**
 * Репозиторий получателей сообщений
 * @description Для работы с базой данных средствами Prisma
 */
@Injectable()
export class MessageTargetRepository {
  /**
   * Конструктор репозитория получателей
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
  //   filters: MessageTargetFilters
  // ):Promise<Chat[]> {
  //   const {size, page} = args
  // }
}
