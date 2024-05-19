import { BadRequestException, Injectable } from '@nestjs/common'
import { Account, Role } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'

import * as argon2 from 'argon2'

import { TokenPayload } from '@interfaces/token-payload'

import { AccountRepository } from '@/account/account.repository'

import { SignUpDto } from './dto/sign-up.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly account: AccountRepository,
    private readonly jwt: JwtService,
  ) {}

  async signUp(dto: SignUpDto): Promise<Account | null> {
    const password = await argon2.hash(dto.password)

    return await this.account.create({
      data: {
        ...dto,
        password,
        roles: {
          set: [Role.Public],
        },
      },
    })
  }

  async getAuthenticatedUserByLogin(
    login: string,
    password: string,
  ): Promise<Account & { access_token: string }> {
    const account = await this.account.findOne({
      where: { login: login.trim() },
    })

    return await this.verifyAccount(account, password)
  }

  async getAuthenticatedUserByEmail(
    email: string,
    password: string,
  ): Promise<Account> {
    const account = await this.account.findOne({
      where: { email: email.trim() },
    })

    return await this.verifyAccount(account, password)
  }

  async generateToken(payload: TokenPayload): Promise<string> {
    return await this.jwt.signAsync(payload)
  }

  private async verifyAccount(
    account: Account | null,
    password: string,
  ): Promise<Account & { access_token: string }> {
    if (!account) {
      throw new BadRequestException('Wrong credentials')
    }

    const verifed = await argon2.verify(account.password, password)

    if (!verifed) {
      throw new BadRequestException('Wrong credentials')
    }

    account.password = undefined!

    const access_token = await this.generateToken({
      user_id: account.id,
      login: account.login,
      email: account.email,
      vk_id: account.id,
      vk_pic: account.vkPic,
      vk_access_token: null,
    })

    return { ...account, access_token }
  }
}
