import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { LoveCountAggregate } from './love-count-aggregate.output'
import { LoveMinAggregate } from './love-min-aggregate.output'
import { LoveMaxAggregate } from './love-max-aggregate.output'

@ObjectType()
export class AggregateLove {
  @Field(() => LoveCountAggregate, { nullable: true })
  _count?: LoveCountAggregate

  @Field(() => LoveMinAggregate, { nullable: true })
  _min?: LoveMinAggregate

  @Field(() => LoveMaxAggregate, { nullable: true })
  _max?: LoveMaxAggregate
}
