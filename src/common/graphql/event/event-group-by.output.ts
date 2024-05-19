import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { EventCountAggregate } from './event-count-aggregate.output'
import { EventMinAggregate } from './event-min-aggregate.output'
import { EventMaxAggregate } from './event-max-aggregate.output'

@ObjectType()
export class EventGroupBy {
  @Field(() => String, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => Date, { nullable: true })
  date?: Date | string

  @Field(() => String, { nullable: false })
  picId!: string

  @Field(() => String, { nullable: false })
  loveId!: string

  @Field(() => String, { nullable: false })
  ownerId!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => EventCountAggregate, { nullable: true })
  _count?: EventCountAggregate

  @Field(() => EventMinAggregate, { nullable: true })
  _min?: EventMinAggregate

  @Field(() => EventMaxAggregate, { nullable: true })
  _max?: EventMaxAggregate
}
