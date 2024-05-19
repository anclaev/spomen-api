import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutUploadsInput } from './account-create-without-uploads.input'

@InputType()
export class AccountCreateOrConnectWithoutUploadsInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountCreateWithoutUploadsInput, { nullable: false })
  @Type(() => AccountCreateWithoutUploadsInput)
  create!: AccountCreateWithoutUploadsInput
}
