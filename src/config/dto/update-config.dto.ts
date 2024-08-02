import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

/**
 * Данные для обновления конфигурации
 */
export class UpdateConfigDto {
  /**
   * Ключ конфигурации
   */
  @IsString()
  @IsNotEmpty()
  key: string

  /**
   * Название элемента конфигурации (опционально)
   */
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  label?: string

  /**
   * Значение конфигурации (опционально)
   */
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  value?: string
}
