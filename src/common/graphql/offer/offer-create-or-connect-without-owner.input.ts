import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Type } from 'class-transformer'
import { OfferCreateWithoutOwnerInput } from './offer-create-without-owner.input'

@InputType()
export class OfferCreateOrConnectWithoutOwnerInput {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  @Type(() => OfferWhereUniqueInput)
  where!: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>

  @Field(() => OfferCreateWithoutOwnerInput, { nullable: false })
  @Type(() => OfferCreateWithoutOwnerInput)
  create!: OfferCreateWithoutOwnerInput
}
