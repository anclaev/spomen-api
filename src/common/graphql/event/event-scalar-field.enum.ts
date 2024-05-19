import { registerEnumType } from '@nestjs/graphql'

export enum EventScalarFieldEnum {
  id = 'id',
  name = 'name',
  description = 'description',
  date = 'date',
  picId = 'picId',
  loveId = 'loveId',
  ownerId = 'ownerId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(EventScalarFieldEnum, {
  name: 'EventScalarFieldEnum',
  description: undefined,
})
