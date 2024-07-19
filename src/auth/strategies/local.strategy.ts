import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'

// Сервисы
import { AuthService } from '../auth.service'

// Интерфейсы
import { AuthenticatedUser } from '@interfaces/user'
import { APIError } from '@interfaces/api-error'

// Утилиты
import { serializeUser } from '@utils/serialize'

/**
 * Стратегия авторизации пользователя по логину
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  /**
   * Конструктор стратегии авторизации по логину
   * @param {AuthService} auth Сервис авторизации
   */
  constructor(private auth: AuthService) {
    super({
      usernameField: 'username',
    })
  }
  /**
   * Валидация пользователя по логину
   * @param {String} login Логин аккаунта
   * @param {String} password Пароль от аккаунта
   * @returns {AuthenticatedUser} Авторизованный пользователь
   */
  async validate(login: string, password: string): Promise<AuthenticatedUser> {
    const user = await this.auth.getAuthenticatedUserByLogin(login, password)

    if (user instanceof APIError) {
      throw new HttpException('', HttpStatus.UNAUTHORIZED)
    }

    return serializeUser(user)
  }
}
