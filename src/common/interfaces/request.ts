import { Request as ExpressRequest } from 'express'

import { User } from './user'

export interface Request extends ExpressRequest {
  cookies: {
    Authentication?: string
  }
}

export interface RequestWithUser extends Request {
  user: User
}
