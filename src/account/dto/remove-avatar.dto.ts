import { IsOptional, IsString } from 'class-validator'

/**
 * Параметры удаления автара аккаунта
 */
export class RemoveAvatarDto {
  /**
   * Идентификатор аккаунта (опционально)
   */
  @IsString()
  @IsOptional()
  id?: string
}
