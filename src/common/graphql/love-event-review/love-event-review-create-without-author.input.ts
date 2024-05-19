import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewCreateaccessInput } from './love-event-review-createaccess.input'
import { LoveEventCreateNestedOneWithoutReviewsInput } from '../love-event/love-event-create-nested-one-without-reviews.input'

@InputType()
export class LoveEventReviewCreateWithoutAuthorInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => LoveEventReviewCreateaccessInput, { nullable: true })
  access?: LoveEventReviewCreateaccessInput

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => LoveEventCreateNestedOneWithoutReviewsInput, { nullable: false })
  event!: LoveEventCreateNestedOneWithoutReviewsInput
}
