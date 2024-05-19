import { registerEnumType } from '@nestjs/graphql'

export enum LoveEventReviewScalarFieldEnum {
  id = 'id',
  access = 'access',
  authorId = 'authorId',
  eventId = 'eventId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(LoveEventReviewScalarFieldEnum, {
  name: 'LoveEventReviewScalarFieldEnum',
  description: undefined,
})
