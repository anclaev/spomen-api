import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateWithoutReviewsInput } from './account-create-without-reviews.input'
import { Type } from 'class-transformer'
import { AccountCreateOrConnectWithoutReviewsInput } from './account-create-or-connect-without-reviews.input'
import { AccountUpsertWithoutReviewsInput } from './account-upsert-without-reviews.input'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { AccountUpdateToOneWithWhereWithoutReviewsInput } from './account-update-to-one-with-where-without-reviews.input'

@InputType()
export class AccountUpdateOneRequiredWithoutReviewsNestedInput {
  @Field(() => AccountCreateWithoutReviewsInput, { nullable: true })
  @Type(() => AccountCreateWithoutReviewsInput)
  create?: AccountCreateWithoutReviewsInput

  @Field(() => AccountCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: AccountCreateOrConnectWithoutReviewsInput

  @Field(() => AccountUpsertWithoutReviewsInput, { nullable: true })
  @Type(() => AccountUpsertWithoutReviewsInput)
  upsert?: AccountUpsertWithoutReviewsInput

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountUpdateToOneWithWhereWithoutReviewsInput, {
    nullable: true,
  })
  @Type(() => AccountUpdateToOneWithWhereWithoutReviewsInput)
  update?: AccountUpdateToOneWithWhereWithoutReviewsInput
}
