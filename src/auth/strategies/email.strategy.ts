import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-local'
import { Account } from '@prisma/client'

import { AuthService } from '../auth.service'

@Injectable()
export class EmailStrategy extends PassportStrategy(Strategy, 'local-email') {
  constructor(private auth: AuthService) {
    super({
      usernameField: 'email',
    })
  }
  async validate(email: string, password: string): Promise<Account> {
    return this.auth.getAuthenticatedUserByEmail(email, password)
  }
}
