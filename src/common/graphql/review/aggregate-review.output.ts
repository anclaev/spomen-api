import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ReviewCountAggregate } from './review-count-aggregate.output'
import { ReviewMinAggregate } from './review-min-aggregate.output'
import { ReviewMaxAggregate } from './review-max-aggregate.output'

@ObjectType()
export class AggregateReview {
  @Field(() => ReviewCountAggregate, { nullable: true })
  _count?: ReviewCountAggregate

  @Field(() => ReviewMinAggregate, { nullable: true })
  _min?: ReviewMinAggregate

  @Field(() => ReviewMaxAggregate, { nullable: true })
  _max?: ReviewMaxAggregate
}
