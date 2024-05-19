import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventReviewWhereInput } from './love-event-review-where.input'
import { Type } from 'class-transformer'
import { LoveEventReviewOrderByWithRelationInput } from './love-event-review-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'
import { Int } from '@nestjs/graphql'
import { LoveEventReviewCountAggregateInput } from './love-event-review-count-aggregate.input'
import { LoveEventReviewMinAggregateInput } from './love-event-review-min-aggregate.input'
import { LoveEventReviewMaxAggregateInput } from './love-event-review-max-aggregate.input'

@ArgsType()
export class LoveEventReviewAggregateArgs {
  @Field(() => LoveEventReviewWhereInput, { nullable: true })
  @Type(() => LoveEventReviewWhereInput)
  where?: LoveEventReviewWhereInput

  @Field(() => [LoveEventReviewOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LoveEventReviewOrderByWithRelationInput>

  @Field(() => LoveEventReviewWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => LoveEventReviewCountAggregateInput, { nullable: true })
  _count?: LoveEventReviewCountAggregateInput

  @Field(() => LoveEventReviewMinAggregateInput, { nullable: true })
  _min?: LoveEventReviewMinAggregateInput

  @Field(() => LoveEventReviewMaxAggregateInput, { nullable: true })
  _max?: LoveEventReviewMaxAggregateInput
}
