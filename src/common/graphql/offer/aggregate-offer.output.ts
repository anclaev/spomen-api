import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { OfferCountAggregate } from './offer-count-aggregate.output'
import { OfferMinAggregate } from './offer-min-aggregate.output'
import { OfferMaxAggregate } from './offer-max-aggregate.output'

@ObjectType()
export class AggregateOffer {
  @Field(() => OfferCountAggregate, { nullable: true })
  _count?: OfferCountAggregate

  @Field(() => OfferMinAggregate, { nullable: true })
  _min?: OfferMinAggregate

  @Field(() => OfferMaxAggregate, { nullable: true })
  _max?: OfferMaxAggregate
}
