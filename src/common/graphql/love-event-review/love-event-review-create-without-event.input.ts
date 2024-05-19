import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewCreateaccessInput } from './love-event-review-createaccess.input'
import { AccountCreateNestedOneWithoutReviewsInput } from '../account/account-create-nested-one-without-reviews.input'

@InputType()
export class LoveEventReviewCreateWithoutEventInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => LoveEventReviewCreateaccessInput, { nullable: true })
  access?: LoveEventReviewCreateaccessInput

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => AccountCreateNestedOneWithoutReviewsInput, { nullable: false })
  author!: AccountCreateNestedOneWithoutReviewsInput
}
