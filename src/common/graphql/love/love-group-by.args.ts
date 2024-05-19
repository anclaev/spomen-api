import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveWhereInput } from './love-where.input'
import { Type } from 'class-transformer'
import { LoveOrderByWithAggregationInput } from './love-order-by-with-aggregation.input'
import { LoveScalarFieldEnum } from './love-scalar-field.enum'
import { LoveScalarWhereWithAggregatesInput } from './love-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { LoveCountAggregateInput } from './love-count-aggregate.input'
import { LoveMinAggregateInput } from './love-min-aggregate.input'
import { LoveMaxAggregateInput } from './love-max-aggregate.input'

@ArgsType()
export class LoveGroupByArgs {
  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput

  @Field(() => [LoveOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<LoveOrderByWithAggregationInput>

  @Field(() => [LoveScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof LoveScalarFieldEnum>

  @Field(() => LoveScalarWhereWithAggregatesInput, { nullable: true })
  having?: LoveScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => LoveCountAggregateInput, { nullable: true })
  _count?: LoveCountAggregateInput

  @Field(() => LoveMinAggregateInput, { nullable: true })
  _min?: LoveMinAggregateInput

  @Field(() => LoveMaxAggregateInput, { nullable: true })
  _max?: LoveMaxAggregateInput
}
