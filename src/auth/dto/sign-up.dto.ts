import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

/**
 * Регистрационные данные аккаунта
 */
export class SignUpDto {
  /**
   * Логин аккаунта
   * @description Не пустой.
   */
  @IsString()
  @IsNotEmpty()
  login: string

  /**
   * Пароль аккаунта
   * @description Не пустой.
   * @description Не менее 5 символов.
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string

  /**
   * Почта пользователя
   * @description Опциональна.
   */

  @IsString()
  @IsOptional()
  email?: string

  /**
   * Имя пользователя
   * @description Опционально.
   */
  @IsString()
  @IsOptional()
  name?: string

  /**
   * Фамилия пользователя
   * @description Опционально.
   */

  @IsString()
  @IsOptional()
  surname?: string
}
