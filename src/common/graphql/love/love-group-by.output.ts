import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { LoveCountAggregate } from './love-count-aggregate.output'
import { LoveMinAggregate } from './love-min-aggregate.output'
import { LoveMaxAggregate } from './love-max-aggregate.output'

@ObjectType()
export class LoveGroupBy {
  @Field(() => String, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  alias!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => Boolean, { nullable: false })
  private!: boolean

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => LoveCountAggregate, { nullable: true })
  _count?: LoveCountAggregate

  @Field(() => LoveMinAggregate, { nullable: true })
  _min?: LoveMinAggregate

  @Field(() => LoveMaxAggregate, { nullable: true })
  _max?: LoveMaxAggregate
}
