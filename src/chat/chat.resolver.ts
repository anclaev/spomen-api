import { Resolver } from '@nestjs/graphql'
import { Chat } from '@graphql'

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
}
