import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferCreateManyLoveInput } from './offer-create-many-love.input'
import { Type } from 'class-transformer'

@InputType()
export class OfferCreateManyLoveInputEnvelope {
  @Field(() => [OfferCreateManyLoveInput], { nullable: false })
  @Type(() => OfferCreateManyLoveInput)
  data!: Array<OfferCreateManyLoveInput>
}
