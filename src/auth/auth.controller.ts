import {
  Body,
  ClassSerializerInterceptor,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'

import { RequestWithUser } from '@interfaces/req-with-user'
import { UseTransform } from '@decorators/transform'

import { AccountResponse } from '@/account/interfaces/account.response'

import { AuthService } from './auth.service'

import { LocalLoginGuard } from './guards/local-login.guard'
import { LocalEmailGuard } from './guards/local-email.guard'

import { SignUpDto } from './dto/sign-up.dto'

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

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
  signIn(@Req() req: RequestWithUser) {
    return req.user
  }

  @Post('sign-in-email')
  @HttpCode(200)
  @UseGuards(LocalEmailGuard)
  signInByEmail(@Req() req: RequestWithUser) {
    return req.user
  }
}
