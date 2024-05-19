import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Access } from '../prisma/access.enum'
import { LoveEventReviewCountAggregate } from './love-event-review-count-aggregate.output'
import { LoveEventReviewMinAggregate } from './love-event-review-min-aggregate.output'
import { LoveEventReviewMaxAggregate } from './love-event-review-max-aggregate.output'

@ObjectType()
export class LoveEventReviewGroupBy {
  @Field(() => String, { nullable: false })
  id!: string

  @Field(() => [Access], { nullable: true })
  access?: Array<keyof typeof Access>

  @Field(() => String, { nullable: false })
  authorId!: string

  @Field(() => String, { nullable: false })
  eventId!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => LoveEventReviewCountAggregate, { nullable: true })
  _count?: LoveEventReviewCountAggregate

  @Field(() => LoveEventReviewMinAggregate, { nullable: true })
  _min?: LoveEventReviewMinAggregate

  @Field(() => LoveEventReviewMaxAggregate, { nullable: true })
  _max?: LoveEventReviewMaxAggregate
}
