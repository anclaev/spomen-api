import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OfferWhereInput } from './offer-where.input'
import { Type } from 'class-transformer'
import { OfferOrderByWithAggregationInput } from './offer-order-by-with-aggregation.input'
import { OfferScalarFieldEnum } from './offer-scalar-field.enum'
import { OfferScalarWhereWithAggregatesInput } from './offer-scalar-where-with-aggregates.input'
import { Int } from '@nestjs/graphql'
import { OfferCountAggregateInput } from './offer-count-aggregate.input'
import { OfferMinAggregateInput } from './offer-min-aggregate.input'
import { OfferMaxAggregateInput } from './offer-max-aggregate.input'

@ArgsType()
export class OfferGroupByArgs {
  @Field(() => OfferWhereInput, { nullable: true })
  @Type(() => OfferWhereInput)
  where?: OfferWhereInput

  @Field(() => [OfferOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<OfferOrderByWithAggregationInput>

  @Field(() => [OfferScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof OfferScalarFieldEnum>

  @Field(() => OfferScalarWhereWithAggregatesInput, { nullable: true })
  having?: OfferScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => OfferCountAggregateInput, { nullable: true })
  _count?: OfferCountAggregateInput

  @Field(() => OfferMinAggregateInput, { nullable: true })
  _min?: OfferMinAggregateInput

  @Field(() => OfferMaxAggregateInput, { nullable: true })
  _max?: OfferMaxAggregateInput
}
