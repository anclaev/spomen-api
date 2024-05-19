import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { LoveCountOrderByAggregateInput } from './love-count-order-by-aggregate.input'
import { LoveMaxOrderByAggregateInput } from './love-max-order-by-aggregate.input'
import { LoveMinOrderByAggregateInput } from './love-min-order-by-aggregate.input'

@InputType()
export class LoveOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  alias?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  private?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => LoveCountOrderByAggregateInput, { nullable: true })
  _count?: LoveCountOrderByAggregateInput

  @Field(() => LoveMaxOrderByAggregateInput, { nullable: true })
  _max?: LoveMaxOrderByAggregateInput

  @Field(() => LoveMinOrderByAggregateInput, { nullable: true })
  _min?: LoveMinOrderByAggregateInput
}
