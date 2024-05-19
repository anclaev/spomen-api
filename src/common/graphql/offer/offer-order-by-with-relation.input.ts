import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { LoveOrderByWithRelationInput } from '../love/love-order-by-with-relation.input'
import { AccountOrderByWithRelationInput } from '../account/account-order-by-with-relation.input'

@InputType()
export class OfferOrderByWithRelationInput {
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

  @Field(() => LoveOrderByWithRelationInput, { nullable: true })
  love?: LoveOrderByWithRelationInput

  @Field(() => AccountOrderByWithRelationInput, { nullable: true })
  owner?: AccountOrderByWithRelationInput

  @Field(() => AccountOrderByWithRelationInput, { nullable: true })
  target?: AccountOrderByWithRelationInput
}
