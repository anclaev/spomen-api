import { BadRequestException, Injectable } from '@nestjs/common'
import { Account } from '@prisma/client'
import * as argon2 from 'argon2'

import { AccountRepository } from '@/account/account.repository'

import { SignUpDto } from './dto/sign-up.dto'

@Injectable()
export class AuthService {
  constructor(private readonly account: AccountRepository) {}

  async signUp(dto: SignUpDto): Promise<Account | null> {
    const password = await argon2.hash(dto.password)

    return await this.account.create({ data: { ...dto, password } })
  }

  async getAuthenticatedUserByLogin(
    login: string,
    password: string,
  ): Promise<Account> {
    const account = await this.account.findOne({
      where: { login: login.trim() },
    })

    if (!account) {
      throw new BadRequestException('Wrong credentials')
    }

    return await this.verifyPassword(account, password)
  }

  async getAuthenticatedUserByEmail(
    email: string,
    password: string,
  ): Promise<Account> {
    const account = await this.account.findOne({
      where: { email: email.trim() },
    })

    if (!account) {
      throw new BadRequestException('Wrong credentials')
    }

    return await this.verifyPassword(account, password)
  }

  private async verifyPassword(
    account: Account,
    password: string,
  ): Promise<Account> {
    const verifed = await argon2.verify(account.password, password)

    if (!verifed) {
      throw new BadRequestException('Wrong credentials')
    }

    account.password = undefined!

    return account
  }
}
