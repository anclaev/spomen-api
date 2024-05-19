import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountWhereInput } from './account-where.input'
import { Type } from 'class-transformer'
import { AccountUpdateWithoutUploadsInput } from './account-update-without-uploads.input'

@InputType()
export class AccountUpdateToOneWithWhereWithoutUploadsInput {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput

  @Field(() => AccountUpdateWithoutUploadsInput, { nullable: false })
  @Type(() => AccountUpdateWithoutUploadsInput)
  data!: AccountUpdateWithoutUploadsInput
}
