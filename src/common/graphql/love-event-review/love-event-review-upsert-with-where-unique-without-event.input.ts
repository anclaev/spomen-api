import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventReviewUpdateWithoutEventInput } from './love-event-review-update-without-event.input'
import { LoveEventReviewCreateWithoutEventInput } from './love-event-review-create-without-event.input'

@InputType()
export class LoveEventReviewUpsertWithWhereUniqueWithoutEventInput {
  @Field(() => LoveEventReviewWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventReviewWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>

  @Field(() => LoveEventReviewUpdateWithoutEventInput, { nullable: false })
  @Type(() => LoveEventReviewUpdateWithoutEventInput)
  update!: LoveEventReviewUpdateWithoutEventInput

  @Field(() => LoveEventReviewCreateWithoutEventInput, { nullable: false })
  @Type(() => LoveEventReviewCreateWithoutEventInput)
  create!: LoveEventReviewCreateWithoutEventInput
}
