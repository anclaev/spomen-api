import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferCreateManyOwnerInput } from './offer-create-many-owner.input'
import { Type } from 'class-transformer'

@InputType()
export class OfferCreateManyOwnerInputEnvelope {
  @Field(() => [OfferCreateManyOwnerInput], { nullable: false })
  @Type(() => OfferCreateManyOwnerInput)
  data!: Array<OfferCreateManyOwnerInput>
}
