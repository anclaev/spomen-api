import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountUpdateWithoutReviewsInput } from './account-update-without-reviews.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutReviewsInput } from './account-create-without-reviews.input'
import { AccountWhereInput } from './account-where.input'

@InputType()
export class AccountUpsertWithoutReviewsInput {
  @Field(() => AccountUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => AccountUpdateWithoutReviewsInput)
  update!: AccountUpdateWithoutReviewsInput

  @Field(() => AccountCreateWithoutReviewsInput, { nullable: false })
  @Type(() => AccountCreateWithoutReviewsInput)
  create!: AccountCreateWithoutReviewsInput

  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput
}
