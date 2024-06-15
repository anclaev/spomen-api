import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

/**
 * Гард авторизации пользователя по JWT-токену
 */
@Injectable()
export class JwtGuard extends AuthGuard('jwt') {}
