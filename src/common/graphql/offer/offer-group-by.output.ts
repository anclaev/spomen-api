import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { OfferCountAggregate } from './offer-count-aggregate.output'
import { OfferMinAggregate } from './offer-min-aggregate.output'
import { OfferMaxAggregate } from './offer-max-aggregate.output'

@ObjectType()
export class OfferGroupBy {
  @Field(() => String, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  code!: string

  @Field(() => String, { nullable: false })
  loveId!: string

  @Field(() => String, { nullable: false })
  ownerId!: string

  @Field(() => String, { nullable: false })
  targetId!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => OfferCountAggregate, { nullable: true })
  _count?: OfferCountAggregate

  @Field(() => OfferMinAggregate, { nullable: true })
  _min?: OfferMinAggregate

  @Field(() => OfferMaxAggregate, { nullable: true })
  _max?: OfferMaxAggregate
}
