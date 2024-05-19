import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferCreateManyTargetInput } from './offer-create-many-target.input'
import { Type } from 'class-transformer'

@InputType()
export class OfferCreateManyTargetInputEnvelope {
  @Field(() => [OfferCreateManyTargetInput], { nullable: false })
  @Type(() => OfferCreateManyTargetInput)
  data!: Array<OfferCreateManyTargetInput>
}
