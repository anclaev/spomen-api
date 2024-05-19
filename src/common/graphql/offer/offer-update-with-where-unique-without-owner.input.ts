import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Type } from 'class-transformer'
import { OfferUpdateWithoutOwnerInput } from './offer-update-without-owner.input'

@InputType()
export class OfferUpdateWithWhereUniqueWithoutOwnerInput {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  @Type(() => OfferWhereUniqueInput)
  where!: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>

  @Field(() => OfferUpdateWithoutOwnerInput, { nullable: false })
  @Type(() => OfferUpdateWithoutOwnerInput)
  data!: OfferUpdateWithoutOwnerInput
}
