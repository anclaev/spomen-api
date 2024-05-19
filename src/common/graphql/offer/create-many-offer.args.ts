import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OfferCreateManyInput } from './offer-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyOfferArgs {
  @Field(() => [OfferCreateManyInput], { nullable: false })
  @Type(() => OfferCreateManyInput)
  data!: Array<OfferCreateManyInput>
}
