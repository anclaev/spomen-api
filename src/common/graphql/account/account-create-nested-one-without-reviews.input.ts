import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateWithoutReviewsInput } from './account-create-without-reviews.input'
import { Type } from 'class-transformer'
import { AccountCreateOrConnectWithoutReviewsInput } from './account-create-or-connect-without-reviews.input'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'

@InputType()
export class AccountCreateNestedOneWithoutReviewsInput {
  @Field(() => AccountCreateWithoutReviewsInput, { nullable: true })
  @Type(() => AccountCreateWithoutReviewsInput)
  create?: AccountCreateWithoutReviewsInput

  @Field(() => AccountCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: AccountCreateOrConnectWithoutReviewsInput

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
