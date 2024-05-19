import { registerEnumType } from '@nestjs/graphql'

export enum ReviewScalarFieldEnum {
  id = 'id',
  access = 'access',
  authorId = 'authorId',
  eventId = 'eventId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(ReviewScalarFieldEnum, {
  name: 'ReviewScalarFieldEnum',
  description: undefined,
})
