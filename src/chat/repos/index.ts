import { MessageTargetRepository } from '@/chat/repos/message-target.repository'
import { MessageRepository } from '@/chat/repos/message.repository'
import { ChatRepository } from '@/chat/repos/chat.repository'

export const repos = [
  ChatRepository,
  MessageRepository,
  MessageTargetRepository,
]
