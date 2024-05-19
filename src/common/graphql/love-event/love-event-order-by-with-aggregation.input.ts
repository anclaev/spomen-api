import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { LoveEventCountOrderByAggregateInput } from './love-event-count-order-by-aggregate.input'
import { LoveEventMaxOrderByAggregateInput } from './love-event-max-order-by-aggregate.input'
import { LoveEventMinOrderByAggregateInput } from './love-event-min-order-by-aggregate.input'

@InputType()
export class LoveEventOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  date?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  picId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  loveId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  ownerId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => LoveEventCountOrderByAggregateInput, { nullable: true })
  _count?: LoveEventCountOrderByAggregateInput

  @Field(() => LoveEventMaxOrderByAggregateInput, { nullable: true })
  _max?: LoveEventMaxOrderByAggregateInput

  @Field(() => LoveEventMinOrderByAggregateInput, { nullable: true })
  _min?: LoveEventMinOrderByAggregateInput
}
