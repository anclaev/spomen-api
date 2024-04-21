import { Exclude } from 'class-transformer'

import { Sex } from '@graphql/prisma/sex.enum'

export class AccountResponse {
  id: string
  login: string
  email?: string
  vk_id?: string
  vk_pic?: string
  name?: string
  surname?: string
  sex?: Sex
  birthday?: Date

  @Exclude()
  password: string

  createdAt: Date
  updatedAt: Date
}
