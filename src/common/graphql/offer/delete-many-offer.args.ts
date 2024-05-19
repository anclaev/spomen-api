import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OfferWhereInput } from './offer-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyOfferArgs {
  @Field(() => OfferWhereInput, { nullable: true })
  @Type(() => OfferWhereInput)
  where?: OfferWhereInput
}
