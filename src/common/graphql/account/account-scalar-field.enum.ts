import { registerEnumType } from '@nestjs/graphql'

export enum AccountScalarFieldEnum {
  id = 'id',
  login = 'login',
  password = 'password',
  email = 'email',
  roles = 'roles',
  vkId = 'vkId',
  vkPic = 'vkPic',
  sex = 'sex',
  name = 'name',
  surname = 'surname',
  birthday = 'birthday',
  loveId = 'loveId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(AccountScalarFieldEnum, {
  name: 'AccountScalarFieldEnum',
  description: undefined,
})
