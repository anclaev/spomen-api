import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountUpdateWithoutUploadsInput } from './account-update-without-uploads.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutUploadsInput } from './account-create-without-uploads.input'
import { AccountWhereInput } from './account-where.input'

@InputType()
export class AccountUpsertWithoutUploadsInput {
  @Field(() => AccountUpdateWithoutUploadsInput, { nullable: false })
  @Type(() => AccountUpdateWithoutUploadsInput)
  update!: AccountUpdateWithoutUploadsInput

  @Field(() => AccountCreateWithoutUploadsInput, { nullable: false })
  @Type(() => AccountCreateWithoutUploadsInput)
  create!: AccountCreateWithoutUploadsInput

  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput
}
