import { Account } from '@prisma/client'
import { Request } from 'express'

export interface RequestWithUser extends Request {
  user: Omit<Account, 'password'>
}
