import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferScalarWhereInput } from './offer-scalar-where.input'
import { Type } from 'class-transformer'
import { OfferUpdateManyMutationInput } from './offer-update-many-mutation.input'

@InputType()
export class OfferUpdateManyWithWhereWithoutTargetInput {
  @Field(() => OfferScalarWhereInput, { nullable: false })
  @Type(() => OfferScalarWhereInput)
  where!: OfferScalarWhereInput

  @Field(() => OfferUpdateManyMutationInput, { nullable: false })
  @Type(() => OfferUpdateManyMutationInput)
  data!: OfferUpdateManyMutationInput
}
