import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { LoveEventReviewCountAggregate } from './love-event-review-count-aggregate.output'
import { LoveEventReviewMinAggregate } from './love-event-review-min-aggregate.output'
import { LoveEventReviewMaxAggregate } from './love-event-review-max-aggregate.output'

@ObjectType()
export class AggregateLoveEventReview {
  @Field(() => LoveEventReviewCountAggregate, { nullable: true })
  _count?: LoveEventReviewCountAggregate

  @Field(() => LoveEventReviewMinAggregate, { nullable: true })
  _min?: LoveEventReviewMinAggregate

  @Field(() => LoveEventReviewMaxAggregate, { nullable: true })
  _max?: LoveEventReviewMaxAggregate
}
