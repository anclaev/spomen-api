import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OfferWhereInput } from './offer-where.input'
import { Type } from 'class-transformer'
import { OfferOrderByWithRelationInput } from './offer-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Int } from '@nestjs/graphql'
import { OfferCountAggregateInput } from './offer-count-aggregate.input'
import { OfferMinAggregateInput } from './offer-min-aggregate.input'
import { OfferMaxAggregateInput } from './offer-max-aggregate.input'

@ArgsType()
export class OfferAggregateArgs {
  @Field(() => OfferWhereInput, { nullable: true })
  @Type(() => OfferWhereInput)
  where?: OfferWhereInput

  @Field(() => [OfferOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<OfferOrderByWithRelationInput>

  @Field(() => OfferWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>

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
