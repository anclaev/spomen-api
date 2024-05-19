import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UploadOrderByWithRelationInput } from '../upload/upload-order-by-with-relation.input'
import { LoveOrderByWithRelationInput } from '../love/love-order-by-with-relation.input'
import { AccountOrderByWithRelationInput } from '../account/account-order-by-with-relation.input'
import { LoveEventReviewOrderByRelationAggregateInput } from '../love-event-review/love-event-review-order-by-relation-aggregate.input'

@InputType()
export class LoveEventOrderByWithRelationInput {
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

  @Field(() => UploadOrderByWithRelationInput, { nullable: true })
  pic?: UploadOrderByWithRelationInput

  @Field(() => LoveOrderByWithRelationInput, { nullable: true })
  love?: LoveOrderByWithRelationInput

  @Field(() => AccountOrderByWithRelationInput, { nullable: true })
  owner?: AccountOrderByWithRelationInput

  @Field(() => LoveEventReviewOrderByRelationAggregateInput, { nullable: true })
  reviews?: LoveEventReviewOrderByRelationAggregateInput
}
