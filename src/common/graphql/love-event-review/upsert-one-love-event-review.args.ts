import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventReviewCreateInput } from './love-event-review-create.input'
import { LoveEventReviewUpdateInput } from './love-event-review-update.input'

@ArgsType()
export class UpsertOneLoveEventReviewArgs {
  @Field(() => LoveEventReviewWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventReviewWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>

  @Field(() => LoveEventReviewCreateInput, { nullable: false })
  @Type(() => LoveEventReviewCreateInput)
  create!: LoveEventReviewCreateInput

  @Field(() => LoveEventReviewUpdateInput, { nullable: false })
  @Type(() => LoveEventReviewUpdateInput)
  update!: LoveEventReviewUpdateInput
}
