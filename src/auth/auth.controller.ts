import {
  Body,
  ClassSerializerInterceptor,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'

import { Account } from '@prisma/client'
import { Response } from 'express'

import { AuthenticatedUser, User } from '@interfaces/user'

import { UseTransform } from '@decorators/transform'
import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'
import { Cookies } from '@utils/cookies'

import { AccountResponse } from '@/account/account.response'

import { ConfigService } from '@core/config'
import { AuthService } from './auth.service'

import { LocalLoginGuard } from './guards/local-login.guard'
import { LocalEmailGuard } from './guards/local-email.guard'

import { SignUpDto } from './dto/sign-up.dto'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  constructor(
    private readonly auth: AuthService,
    private readonly config: ConfigService,
  ) {}

  @Get()
  @UseAuth()
  user(@UseUser() user: Account) {
    return user
  }

  @Post('sign-up')
  @HttpCode(200)
  @UseTransform(AccountResponse)
  async signUp(@Body() dto: SignUpDto) {
    const createdAccount = await this.auth.signUp(dto)

    if (!createdAccount) {
      throw new ConflictException('Not unique login')
    }

    return createdAccount
  }

  @Post('sign-in')
  @HttpCode(200)
  @UseGuards(LocalLoginGuard)
  signIn(@UseUser() user: AuthenticatedUser, @Res() res: Response) {
    const cookies = [
      new Cookies({
        key: 'Authentication',
        value: user.access_token,
        domain: this.config.gett<string>('DOMAIN'),
        path: '/',
        maxAge: this.config.gett<string>('ACCESS_TOKEN_EXPIRATION'),
        httpOnly: true,
        secure: this.config.isProduction,
      }),
    ]

    res.setHeader(
      'Set-Cookie',
      cookies.map((item) => item.toString()),
    )

    return res.send(user)
  }

  @Post('sign-in-email')
  @HttpCode(200)
  @UseGuards(LocalEmailGuard)
  signInByEmail(@UseUser() user: User) {
    return user
  }

  @Post('logout')
  @HttpCode(200)
  @UseAuth()
  logout(@Res() res: Response) {
    const cookie = new Cookies({
      key: 'Authentication',
      value: '',
      domain: this.config.gett<string>('DOMAIN'),
      path: '/',
      maxAge: '0',
      httpOnly: true,
      secure: this.config.isProduction,
    })

    res.setHeader('Set-Cookie', cookie.toString())

    return res.send(200)
  }
}
