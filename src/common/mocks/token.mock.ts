import { TokenPayload, Tokens, TokensResponse } from '@interfaces/tokens'

export const mockTokenPayload: TokenPayload = {
  userid: '1',
  username: 'test',
  email: null,
  vk_id: null,
  vk_access_token: null,
  vk_avatar: null,
}

export const mockToken = '1f3813u13u9913kx1'

export const mockTokens: Tokens = {
  access_token: '2d13d13d13d1',
  refresh_token: 'd313d13d13d13d',
}

export const mockTokenResponse: TokensResponse = {
  ...mockTokens,
  token_type: 'bearer',
}
