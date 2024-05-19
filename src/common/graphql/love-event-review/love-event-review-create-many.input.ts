import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewCreateaccessInput } from './love-event-review-createaccess.input'

@InputType()
export class LoveEventReviewCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => LoveEventReviewCreateaccessInput, { nullable: true })
  access?: LoveEventReviewCreateaccessInput

  @Field(() => String, { nullable: false })
  authorId!: string

  @Field(() => String, { nullable: false })
  eventId!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
