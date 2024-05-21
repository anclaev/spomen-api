import { Account } from '@graphql/index'

import { AuthenticatedUser, User } from '@interfaces/user'

export const mockAccount: Account = {
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  email: null,
  roles: ['Public'],
  avatarId: null,
  vkId: null,
  vkAvatar: null,
  name: null,
  surname: null,
  gender: null,
  birthday: null,
  loveId: null,
  login: 'test',
  password: 'test',
}

export const mockUser: User = {
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  email: null,
  roles: ['Public'],
  avatarId: null,
  vkId: null,
  vkAvatar: null,
  name: null,
  surname: null,
  gender: null,
  birthday: null,
  loveId: null,
  login: 'test',
}

export const mockAuthenticatedUser: AuthenticatedUser = {
  ...mockUser,
  access_token: 'test',
}
