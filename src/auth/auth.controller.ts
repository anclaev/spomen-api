import {
  Body,
  ClassSerializerInterceptor,
  ConflictException,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'

import { Account } from '@prisma/client'

import { User } from '@interfaces/user'

import { UseTransform } from '@decorators/transform'
import { UseAuth } from '@decorators/auth'
import { UseUser } from '@decorators/user'

import { AccountResponse } from '@/account/account.response'

import { AuthService } from './auth.service'

import { LocalLoginGuard } from './guards/local-login.guard'
import { LocalEmailGuard } from './guards/local-email.guard'

import { SignUpDto } from './dto/sign-up.dto'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

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
  signIn(@UseUser() user: User) {
    return user
  }

  @Post('sign-in-email')
  @HttpCode(200)
  @UseGuards(LocalEmailGuard)
  signInByEmail(@UseUser() user: User) {
    return user
  }
}
