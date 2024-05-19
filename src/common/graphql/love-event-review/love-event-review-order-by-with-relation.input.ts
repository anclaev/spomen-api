import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { AccountOrderByWithRelationInput } from '../account/account-order-by-with-relation.input'
import { LoveEventOrderByWithRelationInput } from '../love-event/love-event-order-by-with-relation.input'

@InputType()
export class LoveEventReviewOrderByWithRelationInput {
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

  @Field(() => AccountOrderByWithRelationInput, { nullable: true })
  author?: AccountOrderByWithRelationInput

  @Field(() => LoveEventOrderByWithRelationInput, { nullable: true })
  event?: LoveEventOrderByWithRelationInput
}
