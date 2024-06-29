import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

/**
 * Гард проверки токена обновления
 */
@Injectable()
export class RefreshGuard extends AuthGuard('refresh') {}
