import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  login: string

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string

  @IsString()
  @IsOptional()
  email?: string

  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  surname?: string
}
