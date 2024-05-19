import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountWhereInput } from './account-where.input'
import { Type } from 'class-transformer'
import { AccountUpdateWithoutReviewsInput } from './account-update-without-reviews.input'

@InputType()
export class AccountUpdateToOneWithWhereWithoutReviewsInput {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput

  @Field(() => AccountUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => AccountUpdateWithoutReviewsInput)
  data!: AccountUpdateWithoutReviewsInput
}
