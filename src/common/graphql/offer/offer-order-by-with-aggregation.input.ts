import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { OfferCountOrderByAggregateInput } from './offer-count-order-by-aggregate.input'
import { OfferMaxOrderByAggregateInput } from './offer-max-order-by-aggregate.input'
import { OfferMinOrderByAggregateInput } from './offer-min-order-by-aggregate.input'

@InputType()
export class OfferOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  loveId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  ownerId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  targetId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => OfferCountOrderByAggregateInput, { nullable: true })
  _count?: OfferCountOrderByAggregateInput

  @Field(() => OfferMaxOrderByAggregateInput, { nullable: true })
  _max?: OfferMaxOrderByAggregateInput

  @Field(() => OfferMinOrderByAggregateInput, { nullable: true })
  _min?: OfferMinOrderByAggregateInput
}
