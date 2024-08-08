import { Module } from '@nestjs/common'

import { ChatResolver } from './chat.resolver'
import { ChatService } from './chat.service'
import { repos } from './repos'

@Module({
  providers: [...repos, ChatService, ChatResolver],
  exports: [ChatService],
})
export class ChatModule {}
