import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Access } from '../prisma/access.enum'
import { ReviewCountAggregate } from './review-count-aggregate.output'
import { ReviewMinAggregate } from './review-min-aggregate.output'
import { ReviewMaxAggregate } from './review-max-aggregate.output'

@ObjectType()
export class ReviewGroupBy {
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

  @Field(() => ReviewCountAggregate, { nullable: true })
  _count?: ReviewCountAggregate

  @Field(() => ReviewMinAggregate, { nullable: true })
  _min?: ReviewMinAggregate

  @Field(() => ReviewMaxAggregate, { nullable: true })
  _max?: ReviewMaxAggregate
}
