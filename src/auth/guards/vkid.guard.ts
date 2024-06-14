import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

/**
 * Гард авторизации пользователя через VKID
 */
@Injectable()
export class VKIDGuard extends AuthGuard('vkid') {}
