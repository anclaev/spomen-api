import { Account } from '@prisma/client'

export type User = Omit<Account, 'password'>

export type AuthenticatedUser = User & {
  access_token: string
}
