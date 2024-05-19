import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { LoveOrderByWithRelationInput } from '../love/love-order-by-with-relation.input'
import { UploadOrderByRelationAggregateInput } from '../upload/upload-order-by-relation-aggregate.input'
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input'
import { OfferOrderByRelationAggregateInput } from '../offer/offer-order-by-relation-aggregate.input'
import { EventOrderByRelationAggregateInput } from '../event/event-order-by-relation-aggregate.input'

@InputType()
export class AccountOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  login?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  roles?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  vkId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  vkPic?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  sex?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  surname?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  birthday?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  loveId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => LoveOrderByWithRelationInput, { nullable: true })
  love?: LoveOrderByWithRelationInput

  @Field(() => UploadOrderByRelationAggregateInput, { nullable: true })
  uploads?: UploadOrderByRelationAggregateInput

  @Field(() => ReviewOrderByRelationAggregateInput, { nullable: true })
  reviews?: ReviewOrderByRelationAggregateInput

  @Field(() => OfferOrderByRelationAggregateInput, { nullable: true })
  offers?: OfferOrderByRelationAggregateInput

  @Field(() => OfferOrderByRelationAggregateInput, { nullable: true })
  offerOwner?: OfferOrderByRelationAggregateInput

  @Field(() => EventOrderByRelationAggregateInput, { nullable: true })
  eventsOwner?: EventOrderByRelationAggregateInput
}
