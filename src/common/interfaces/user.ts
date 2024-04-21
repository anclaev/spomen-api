import { Account } from '@prisma/client'

export type User = Omit<Account, 'password'>
