import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventReviewWhereInput } from './love-event-review-where.input'
import { Type } from 'class-transformer'
import { LoveEventReviewOrderByWithAggregationInput } from './love-event-review-order-by-with-aggregation.input'
import { LoveEventReviewScalarFieldEnum } from './love-event-review-scalar-field.enum'
import { LoveEventReviewScalarWhereWithAggregatesInput } from './love-event-review-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { LoveEventReviewCountAggregateInput } from './love-event-review-count-aggregate.input'
import { LoveEventReviewMinAggregateInput } from './love-event-review-min-aggregate.input'
import { LoveEventReviewMaxAggregateInput } from './love-event-review-max-aggregate.input'

@ArgsType()
export class LoveEventReviewGroupByArgs {
  @Field(() => LoveEventReviewWhereInput, { nullable: true })
  @Type(() => LoveEventReviewWhereInput)
  where?: LoveEventReviewWhereInput

  @Field(() => [LoveEventReviewOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<LoveEventReviewOrderByWithAggregationInput>

  @Field(() => [LoveEventReviewScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof LoveEventReviewScalarFieldEnum>

  @Field(() => LoveEventReviewScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: LoveEventReviewScalarWhereWithAggregatesInput

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
