import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-local'

import { AuthenticatedUser } from '@interfaces/user'

import { AuthService } from '../auth.service'

/**
 * Стратегия авторизации пользователя по почте
 */
@Injectable()
export class EmailStrategy extends PassportStrategy(Strategy, 'local-email') {
  /**
   * Конструктор стратегии авторизации по почте
   * @param {AuthService} auth Сервис авторизации
   */
  constructor(private auth: AuthService) {
    super({
      usernameField: 'email',
    })
  }

  /**
   * Валидация пользователя по почте
   * @param {String} email Почта аккаунта
   * @param {String} password Пароль от аккаунта
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  async validate(email: string, password: string): Promise<AuthenticatedUser> {
    return this.auth.getAuthenticatedUserByEmail(email, password)
  }
}
