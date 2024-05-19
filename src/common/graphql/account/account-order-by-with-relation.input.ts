import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { LoveOrderByWithRelationInput } from '../love/love-order-by-with-relation.input'
import { UploadOrderByRelationAggregateInput } from '../upload/upload-order-by-relation-aggregate.input'
import { LoveEventReviewOrderByRelationAggregateInput } from '../love-event-review/love-event-review-order-by-relation-aggregate.input'
import { LoveEventOrderByRelationAggregateInput } from '../love-event/love-event-order-by-relation-aggregate.input'

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

  @Field(() => LoveEventReviewOrderByRelationAggregateInput, { nullable: true })
  reviews?: LoveEventReviewOrderByRelationAggregateInput

  @Field(() => LoveEventOrderByRelationAggregateInput, { nullable: true })
  eventsOwner?: LoveEventOrderByRelationAggregateInput
}
