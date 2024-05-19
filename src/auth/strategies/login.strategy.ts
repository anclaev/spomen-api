import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Strategy } from 'passport-local'

import { AuthenticatedUser } from '@interfaces/user'

import { AuthService } from '../auth.service'

/**
 * Стратегия авторизации пользователя по логину
 */
@Injectable()
export class LoginStrategy extends PassportStrategy(Strategy, 'local-login') {
  /**
   * Конструктор стратегии авторизации по логину
   * @param {AuthService} auth Сервис авторизации
   */
  constructor(private auth: AuthService) {
    super({
      usernameField: 'login',
    })
  }
  /**
   * Валидация пользователя по логину
   * @param {String} login Логин аккаунта
   * @param {String} password Пароль от аккаунта
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  async validate(login: string, password: string): Promise<AuthenticatedUser> {
    return this.auth.getAuthenticatedUserByLogin(login, password)
  }
}
