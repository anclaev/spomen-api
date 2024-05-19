import { registerEnumType } from '@nestjs/graphql'

export enum LoveEventScalarFieldEnum {
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

registerEnumType(LoveEventScalarFieldEnum, {
  name: 'LoveEventScalarFieldEnum',
  description: undefined,
})
