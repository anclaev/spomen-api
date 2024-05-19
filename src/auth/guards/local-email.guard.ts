import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

/**
 * Гард авторизации пользователя по почте
 */
@Injectable()
export class LocalEmailGuard extends AuthGuard('local-email') {}
