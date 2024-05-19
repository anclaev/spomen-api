import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { AccountOrderByRelationAggregateInput } from '../account/account-order-by-relation-aggregate.input'
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input'
import { OfferOrderByRelationAggregateInput } from '../offer/offer-order-by-relation-aggregate.input'

@InputType()
export class LoveOrderByWithRelationInput {
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

  @Field(() => AccountOrderByRelationAggregateInput, { nullable: true })
  members?: AccountOrderByRelationAggregateInput

  @Field(() => EventOrderByRelationAggregateInput, { nullable: true })
  events?: EventOrderByRelationAggregateInput

  @Field(() => OfferOrderByRelationAggregateInput, { nullable: true })
  Offer?: OfferOrderByRelationAggregateInput
}
