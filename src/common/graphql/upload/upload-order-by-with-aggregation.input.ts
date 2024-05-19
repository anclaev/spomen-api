import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { UploadCountOrderByAggregateInput } from './upload-count-order-by-aggregate.input'
import { UploadMaxOrderByAggregateInput } from './upload-max-order-by-aggregate.input'
import { UploadMinOrderByAggregateInput } from './upload-min-order-by-aggregate.input'

@InputType()
export class UploadOrderByWithAggregationInput {
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

  @Field(() => UploadCountOrderByAggregateInput, { nullable: true })
  _count?: UploadCountOrderByAggregateInput

  @Field(() => UploadMaxOrderByAggregateInput, { nullable: true })
  _max?: UploadMaxOrderByAggregateInput

  @Field(() => UploadMinOrderByAggregateInput, { nullable: true })
  _min?: UploadMinOrderByAggregateInput
}
