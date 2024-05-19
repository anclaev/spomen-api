import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { LoveEventReviewCountOrderByAggregateInput } from './love-event-review-count-order-by-aggregate.input'
import { LoveEventReviewMaxOrderByAggregateInput } from './love-event-review-max-order-by-aggregate.input'
import { LoveEventReviewMinOrderByAggregateInput } from './love-event-review-min-order-by-aggregate.input'

@InputType()
export class LoveEventReviewOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  access?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  authorId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  eventId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => LoveEventReviewCountOrderByAggregateInput, { nullable: true })
  _count?: LoveEventReviewCountOrderByAggregateInput

  @Field(() => LoveEventReviewMaxOrderByAggregateInput, { nullable: true })
  _max?: LoveEventReviewMaxOrderByAggregateInput

  @Field(() => LoveEventReviewMinOrderByAggregateInput, { nullable: true })
  _min?: LoveEventReviewMinOrderByAggregateInput
}
