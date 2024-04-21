import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-local'
import { Account } from '@prisma/client'

import { AuthService } from '../auth.service'

@Injectable()
export class LoginStrategy extends PassportStrategy(Strategy, 'local-login') {
  constructor(private auth: AuthService) {
    super({
      usernameField: 'login',
    })
  }
  async validate(login: string, password: string): Promise<Account> {
    return this.auth.getAuthenticatedUserByLogin(login, password)
  }
}
