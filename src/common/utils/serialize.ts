import { Account } from '@prisma/client'

export const serializeUser = (account: Account) => ({
  ...account,
  password: undefined,
})
