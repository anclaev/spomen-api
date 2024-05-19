import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateWithoutReviewsInput } from './event-create-without-reviews.input'
import { Type } from 'class-transformer'
import { EventCreateOrConnectWithoutReviewsInput } from './event-create-or-connect-without-reviews.input'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'

@InputType()
export class EventCreateNestedOneWithoutReviewsInput {
  @Field(() => EventCreateWithoutReviewsInput, { nullable: true })
  @Type(() => EventCreateWithoutReviewsInput)
  create?: EventCreateWithoutReviewsInput

  @Field(() => EventCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => EventCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: EventCreateOrConnectWithoutReviewsInput

  @Field(() => EventWhereUniqueInput, { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>
}
