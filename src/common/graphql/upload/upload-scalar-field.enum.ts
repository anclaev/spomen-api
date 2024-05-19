import { registerEnumType } from '@nestjs/graphql'

export enum UploadScalarFieldEnum {
  id = 'id',
  url = 'url',
  access = 'access',
  ownerId = 'ownerId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UploadScalarFieldEnum, {
  name: 'UploadScalarFieldEnum',
  description: undefined,
})
