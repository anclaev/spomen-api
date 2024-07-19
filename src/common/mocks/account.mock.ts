import { Account } from '@graphql'

import { AuthenticatedUser, User } from '@interfaces/user'

import { Sex } from '@enums/sex'

export const mockAccount: Account = {
  id: '1',
  created_at: new Date(),
  updated_at: new Date(),
  email: null,
  roles: ['Public'],
  avatar: null,
  vk_id: null,
  vk_avatar: null,
  first_name: null,
  last_name: null,
  birthday: null,
  username: 'test',
  password: 'test',
  passkey: null,
  sex: Sex.None,
  refresh_tokens: [],
  avatarId: null,
}

export const mockUser: User = {
  id: '1',
  created_at: new Date(),
  updated_at: new Date(),
  email: null,
  roles: ['Public'],
  vk_id: null,
  vk_avatar: null,
  first_name: null,
  last_name: null,
  birthday: null,
  username: 'test',
  passkey: null,
  sex: Sex.None,
  avatar: null,
  avatarId: null,
}

export const mockAuthenticatedUser: AuthenticatedUser = {
  ...mockUser,
  access_token: 'test',
  refresh_token: 'test',
}
