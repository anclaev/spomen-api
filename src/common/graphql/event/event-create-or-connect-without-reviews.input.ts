import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { Type } from 'class-transformer'
import { EventCreateWithoutReviewsInput } from './event-create-without-reviews.input'

@InputType()
export class EventCreateOrConnectWithoutReviewsInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>

  @Field(() => EventCreateWithoutReviewsInput, { nullable: false })
  @Type(() => EventCreateWithoutReviewsInput)
  create!: EventCreateWithoutReviewsInput
}
