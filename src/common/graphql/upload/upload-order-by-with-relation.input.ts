import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { AccountOrderByWithRelationInput } from '../account/account-order-by-with-relation.input'
import { LoveEventOrderByRelationAggregateInput } from '../love-event/love-event-order-by-relation-aggregate.input'

@InputType()
export class UploadOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  url?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  access?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  ownerId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => AccountOrderByWithRelationInput, { nullable: true })
  owner?: AccountOrderByWithRelationInput

  @Field(() => LoveEventOrderByRelationAggregateInput, { nullable: true })
  eventPic?: LoveEventOrderByRelationAggregateInput
}
