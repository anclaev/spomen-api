import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { LoveEventCountAggregate } from './love-event-count-aggregate.output'
import { LoveEventMinAggregate } from './love-event-min-aggregate.output'
import { LoveEventMaxAggregate } from './love-event-max-aggregate.output'

@ObjectType()
export class AggregateLoveEvent {
  @Field(() => LoveEventCountAggregate, { nullable: true })
  _count?: LoveEventCountAggregate

  @Field(() => LoveEventMinAggregate, { nullable: true })
  _min?: LoveEventMinAggregate

  @Field(() => LoveEventMaxAggregate, { nullable: true })
  _max?: LoveEventMaxAggregate
}
