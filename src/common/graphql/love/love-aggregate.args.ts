import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveWhereInput } from './love-where.input'
import { Type } from 'class-transformer'
import { LoveOrderByWithRelationInput } from './love-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'
import { Int } from '@nestjs/graphql'
import { LoveCountAggregateInput } from './love-count-aggregate.input'
import { LoveMinAggregateInput } from './love-min-aggregate.input'
import { LoveMaxAggregateInput } from './love-max-aggregate.input'

@ArgsType()
export class LoveAggregateArgs {
  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput

  @Field(() => [LoveOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LoveOrderByWithRelationInput>

  @Field(() => LoveWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>

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
