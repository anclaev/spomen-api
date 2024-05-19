import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventReviewUpdateWithoutEventInput } from './love-event-review-update-without-event.input'

@InputType()
export class LoveEventReviewUpdateWithWhereUniqueWithoutEventInput {
  @Field(() => LoveEventReviewWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventReviewWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>

  @Field(() => LoveEventReviewUpdateWithoutEventInput, { nullable: false })
  @Type(() => LoveEventReviewUpdateWithoutEventInput)
  data!: LoveEventReviewUpdateWithoutEventInput
}
