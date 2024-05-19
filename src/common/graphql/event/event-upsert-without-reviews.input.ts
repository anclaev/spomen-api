import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventUpdateWithoutReviewsInput } from './event-update-without-reviews.input'
import { Type } from 'class-transformer'
import { EventCreateWithoutReviewsInput } from './event-create-without-reviews.input'
import { EventWhereInput } from './event-where.input'

@InputType()
export class EventUpsertWithoutReviewsInput {
  @Field(() => EventUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => EventUpdateWithoutReviewsInput)
  update!: EventUpdateWithoutReviewsInput

  @Field(() => EventCreateWithoutReviewsInput, { nullable: false })
  @Type(() => EventCreateWithoutReviewsInput)
  create!: EventCreateWithoutReviewsInput

  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  where?: EventWhereInput
}
