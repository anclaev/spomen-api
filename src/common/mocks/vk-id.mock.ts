import { VKID_EXCHANGE_TOKEN_RESPONSE, VKIDUser } from '@interfaces/vk-id'

export const mockVKIDAccessToken = '11f31d1d13d3'

export const mockVKIDExchangeTokenResponse: VKID_EXCHANGE_TOKEN_RESPONSE = {
  access_token: mockVKIDAccessToken,
  access_token_id: '1',
  user_id: 1,
  source: 1,
  source_description: '1',
  expires_in: 12313,
}

export const mockVKIDUsers: Promise<VKIDUser[]> = new Promise(() => {
  return [mockVKIDUser]
})

export const mockVKIDUser: VKIDUser = {
  domain: 'test',
  first_name: 'test',
  id: '1',
  last_name: 'test',
  access_token: mockVKIDAccessToken,
}
