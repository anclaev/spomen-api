import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateWithoutReviewsInput } from './event-create-without-reviews.input'
import { Type } from 'class-transformer'
import { EventCreateOrConnectWithoutReviewsInput } from './event-create-or-connect-without-reviews.input'
import { EventUpsertWithoutReviewsInput } from './event-upsert-without-reviews.input'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { EventUpdateToOneWithWhereWithoutReviewsInput } from './event-update-to-one-with-where-without-reviews.input'

@InputType()
export class EventUpdateOneRequiredWithoutReviewsNestedInput {
  @Field(() => EventCreateWithoutReviewsInput, { nullable: true })
  @Type(() => EventCreateWithoutReviewsInput)
  create?: EventCreateWithoutReviewsInput

  @Field(() => EventCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => EventCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: EventCreateOrConnectWithoutReviewsInput

  @Field(() => EventUpsertWithoutReviewsInput, { nullable: true })
  @Type(() => EventUpsertWithoutReviewsInput)
  upsert?: EventUpsertWithoutReviewsInput

  @Field(() => EventWhereUniqueInput, { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Prisma.AtLeast<EventWhereUniqueInput, 'id'>

  @Field(() => EventUpdateToOneWithWhereWithoutReviewsInput, { nullable: true })
  @Type(() => EventUpdateToOneWithWhereWithoutReviewsInput)
  update?: EventUpdateToOneWithWhereWithoutReviewsInput
}
