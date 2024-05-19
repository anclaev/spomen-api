import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { LoveEventCountAggregate } from './love-event-count-aggregate.output'
import { LoveEventMinAggregate } from './love-event-min-aggregate.output'
import { LoveEventMaxAggregate } from './love-event-max-aggregate.output'

@ObjectType()
export class LoveEventGroupBy {
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

  @Field(() => LoveEventCountAggregate, { nullable: true })
  _count?: LoveEventCountAggregate

  @Field(() => LoveEventMinAggregate, { nullable: true })
  _min?: LoveEventMinAggregate

  @Field(() => LoveEventMaxAggregate, { nullable: true })
  _max?: LoveEventMaxAggregate
}
