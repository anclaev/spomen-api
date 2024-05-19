import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventWhereInput } from './event-where.input'
import { Type } from 'class-transformer'
import { EventUpdateWithoutReviewsInput } from './event-update-without-reviews.input'

@InputType()
export class EventUpdateToOneWithWhereWithoutReviewsInput {
  @Field(() => EventWhereInput, { nullable: true })
  @Type(() => EventWhereInput)
  where?: EventWhereInput

  @Field(() => EventUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => EventUpdateWithoutReviewsInput)
  data!: EventUpdateWithoutReviewsInput
}
