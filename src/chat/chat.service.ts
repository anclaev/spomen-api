import { Injectable } from '@nestjs/common'
import { Chat } from '@prisma/client'

import { APIError } from '@interfaces/api-error'

import { GetChatsDto } from '@/chat/dto/get-chats.dto'

import { MessageTargetRepository } from '@/chat/repos/message-target.repository'
import { MessageRepository } from '@/chat/repos/message.repository'
import { ChatRepository } from '@/chat/repos/chat.repository'

/**
 * Сервис чатов
 */
@Injectable()
export class ChatService {
  /**
   * Конструктор сервиса чатов
   * @param {ChatRepository} chat Репозиторий чатов
   * @param {MessageRepository} message Репозиторий сообщений
   * @param {MessageTargetRepository} messageTarget Репозиторий получателей сообщений
   */
  constructor(
    private readonly chat: ChatRepository,
    private readonly message: MessageRepository,
    private readonly messageTarget: MessageTargetRepository,
  ) {}

  // /**
  //  * Получение списка чатов
  //  * @param {GetChatsDto} Параметры получения
  //  * @returns {Chat[]} Список чатов
  //  */
  // async getChats(
  //   {
  //     size,
  //     page,
  //     user,
  //     filters,
  //   }: GetChatsDto): Promise<Chat[] | APIError> {
  //   if(filters) {
  //     if(filters.owner || filters.owner_id){
  //
  //     }
  //   }
  //
  //
  // }
}
