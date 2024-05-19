import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateaccessInput } from './review-createaccess.input'
import { EventCreateNestedOneWithoutReviewsInput } from '../event/event-create-nested-one-without-reviews.input'

@InputType()
export class ReviewCreateWithoutAuthorInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => ReviewCreateaccessInput, { nullable: true })
  access?: ReviewCreateaccessInput

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => EventCreateNestedOneWithoutReviewsInput, { nullable: false })
  event!: EventCreateNestedOneWithoutReviewsInput
}
