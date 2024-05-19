import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventWhereInput } from './love-event-where.input'
import { Type } from 'class-transformer'
import { LoveEventOrderByWithRelationInput } from './love-event-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Int } from '@nestjs/graphql'
import { LoveEventCountAggregateInput } from './love-event-count-aggregate.input'
import { LoveEventMinAggregateInput } from './love-event-min-aggregate.input'
import { LoveEventMaxAggregateInput } from './love-event-max-aggregate.input'

@ArgsType()
export class LoveEventAggregateArgs {
  @Field(() => LoveEventWhereInput, { nullable: true })
  @Type(() => LoveEventWhereInput)
  where?: LoveEventWhereInput

  @Field(() => [LoveEventOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LoveEventOrderByWithRelationInput>

  @Field(() => LoveEventWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

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
