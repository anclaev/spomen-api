import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Type } from 'class-transformer'
import { OfferCreateWithoutLoveInput } from './offer-create-without-love.input'

@InputType()
export class OfferCreateOrConnectWithoutLoveInput {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  @Type(() => OfferWhereUniqueInput)
  where!: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>

  @Field(() => OfferCreateWithoutLoveInput, { nullable: false })
  @Type(() => OfferCreateWithoutLoveInput)
  create!: OfferCreateWithoutLoveInput
}
