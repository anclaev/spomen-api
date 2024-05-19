import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventReviewUpdateInput } from './love-event-review-update.input'
import { Type } from 'class-transformer'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'

@ArgsType()
export class UpdateOneLoveEventReviewArgs {
  @Field(() => LoveEventReviewUpdateInput, { nullable: false })
  @Type(() => LoveEventReviewUpdateInput)
  data!: LoveEventReviewUpdateInput

  @Field(() => LoveEventReviewWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventReviewWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>
}
