import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Type } from 'class-transformer'
import { OfferUpdateWithoutLoveInput } from './offer-update-without-love.input'
import { OfferCreateWithoutLoveInput } from './offer-create-without-love.input'

@InputType()
export class OfferUpsertWithWhereUniqueWithoutLoveInput {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  @Type(() => OfferWhereUniqueInput)
  where!: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>

  @Field(() => OfferUpdateWithoutLoveInput, { nullable: false })
  @Type(() => OfferUpdateWithoutLoveInput)
  update!: OfferUpdateWithoutLoveInput

  @Field(() => OfferCreateWithoutLoveInput, { nullable: false })
  @Type(() => OfferCreateWithoutLoveInput)
  create!: OfferCreateWithoutLoveInput
}
