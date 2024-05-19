import { registerEnumType } from '@nestjs/graphql'

export enum OfferScalarFieldEnum {
  id = 'id',
  code = 'code',
  loveId = 'loveId',
  ownerId = 'ownerId',
  targetId = 'targetId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(OfferScalarFieldEnum, {
  name: 'OfferScalarFieldEnum',
  description: undefined,
})
