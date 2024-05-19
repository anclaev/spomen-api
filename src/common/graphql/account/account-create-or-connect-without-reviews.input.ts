import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutReviewsInput } from './account-create-without-reviews.input'

@InputType()
export class AccountCreateOrConnectWithoutReviewsInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountCreateWithoutReviewsInput, { nullable: false })
  @Type(() => AccountCreateWithoutReviewsInput)
  create!: AccountCreateWithoutReviewsInput
}
