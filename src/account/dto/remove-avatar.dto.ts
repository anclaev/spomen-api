import { IsOptional, IsString } from 'class-validator'

export class RemoveAvatarDto {
  @IsString()
  @IsOptional()
  id?: string
}
