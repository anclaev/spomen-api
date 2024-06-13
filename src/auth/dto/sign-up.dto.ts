import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator'

/**
 * Регистрационные данные аккаунта
 */
export class SignUpDto {
  /**
   * Логин аккаунта
   * @description Не пустой.
   * @description Не менее 4 символов.
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  login: string

  /**
   * Пароль аккаунта
   * @description Не пустой.
   * @description Не менее 8 символов.
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string

  /**
   * Почта пользователя
   * @description Опциональна.
   */

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string

  /**
   * Имя пользователя
   * @description Опционально.
   * @description Не менее 2 символов.
   */
  @IsString()
  @IsOptional()
  @MinLength(2)
  name?: string

  /**
   * Фамилия пользователя
   * @description Опционально.
   * @description Не менее 2 символов.
   */

  @IsString()
  @IsOptional()
  @MinLength(2)
  surname?: string

  /**
   * Дата рождения пользователя
   * @description Опционально.
   */
  @IsDateString({
    strict: true,
  })
  @IsOptional()
  birthday?: string
}
