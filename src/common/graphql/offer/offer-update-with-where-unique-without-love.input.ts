import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Type } from 'class-transformer'
import { OfferUpdateWithoutLoveInput } from './offer-update-without-love.input'

@InputType()
export class OfferUpdateWithWhereUniqueWithoutLoveInput {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  @Type(() => OfferWhereUniqueInput)
  where!: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>

  @Field(() => OfferUpdateWithoutLoveInput, { nullable: false })
  @Type(() => OfferUpdateWithoutLoveInput)
  data!: OfferUpdateWithoutLoveInput
}
