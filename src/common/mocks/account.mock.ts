import { Sex } from '@enums/sex'
import { Account } from '@graphql/index'

import { AuthenticatedUser, User } from '@interfaces/user'

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
  refresh_tokens: [],
}

export const mockAuthenticatedUser: AuthenticatedUser = {
  ...mockUser,
  access_token: 'test',
  refresh_token: 'test',
  token_type: 'bearer',
}
