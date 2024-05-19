import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventWhereInput } from './love-event-where.input'
import { Type } from 'class-transformer'
import { LoveEventOrderByWithAggregationInput } from './love-event-order-by-with-aggregation.input'
import { LoveEventScalarFieldEnum } from './love-event-scalar-field.enum'
import { LoveEventScalarWhereWithAggregatesInput } from './love-event-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { LoveEventCountAggregateInput } from './love-event-count-aggregate.input'
import { LoveEventMinAggregateInput } from './love-event-min-aggregate.input'
import { LoveEventMaxAggregateInput } from './love-event-max-aggregate.input'

@ArgsType()
export class LoveEventGroupByArgs {
  @Field(() => LoveEventWhereInput, { nullable: true })
  @Type(() => LoveEventWhereInput)
  where?: LoveEventWhereInput

  @Field(() => [LoveEventOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<LoveEventOrderByWithAggregationInput>

  @Field(() => [LoveEventScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof LoveEventScalarFieldEnum>

  @Field(() => LoveEventScalarWhereWithAggregatesInput, { nullable: true })
  having?: LoveEventScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => LoveEventCountAggregateInput, { nullable: true })
  _count?: LoveEventCountAggregateInput

  @Field(() => LoveEventMinAggregateInput, { nullable: true })
  _min?: LoveEventMinAggregateInput

  @Field(() => LoveEventMaxAggregateInput, { nullable: true })
  _max?: LoveEventMaxAggregateInput
}
