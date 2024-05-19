import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferWhereInput } from './offer-where.input'

@InputType()
export class OfferListRelationFilter {
  @Field(() => OfferWhereInput, { nullable: true })
  every?: OfferWhereInput

  @Field(() => OfferWhereInput, { nullable: true })
  some?: OfferWhereInput

  @Field(() => OfferWhereInput, { nullable: true })
  none?: OfferWhereInput
}
