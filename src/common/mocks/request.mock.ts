import { Request } from 'express'

import { mockToken } from './token.mock'

export const mockRequestWithRefresh = (): Request =>
  ({
    cookies: {
      Refresh: mockToken,
    },
  }) as unknown as Request
