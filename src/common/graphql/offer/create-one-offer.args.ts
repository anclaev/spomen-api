import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OfferCreateInput } from './offer-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneOfferArgs {
  @Field(() => OfferCreateInput, { nullable: false })
  @Type(() => OfferCreateInput)
  data!: OfferCreateInput
}
