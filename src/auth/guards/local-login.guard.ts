import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

/**
 * Гард авторизации пользователя по логину
 */
@Injectable()
export class LocalLoginGuard extends AuthGuard('local-login') {}
