import { registerEnumType } from '@nestjs/graphql'

export enum LoveScalarFieldEnum {
  id = 'id',
  alias = 'alias',
  name = 'name',
  'private' = 'private',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(LoveScalarFieldEnum, {
  name: 'LoveScalarFieldEnum',
  description: undefined,
})
