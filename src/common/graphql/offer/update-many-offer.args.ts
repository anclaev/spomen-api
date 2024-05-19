import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { OfferUpdateManyMutationInput } from './offer-update-many-mutation.input'
import { Type } from 'class-transformer'
import { OfferWhereInput } from './offer-where.input'

@ArgsType()
export class UpdateManyOfferArgs {
  @Field(() => OfferUpdateManyMutationInput, { nullable: false })
  @Type(() => OfferUpdateManyMutationInput)
  data!: OfferUpdateManyMutationInput

  @Field(() => OfferWhereInput, { nullable: true })
  @Type(() => OfferWhereInput)
  where?: OfferWhereInput
}
