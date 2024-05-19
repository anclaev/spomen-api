import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Type } from 'class-transformer'
import { OfferUpdateWithoutTargetInput } from './offer-update-without-target.input'
import { OfferCreateWithoutTargetInput } from './offer-create-without-target.input'

@InputType()
export class OfferUpsertWithWhereUniqueWithoutTargetInput {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  @Type(() => OfferWhereUniqueInput)
  where!: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>

  @Field(() => OfferUpdateWithoutTargetInput, { nullable: false })
  @Type(() => OfferUpdateWithoutTargetInput)
  update!: OfferUpdateWithoutTargetInput

  @Field(() => OfferCreateWithoutTargetInput, { nullable: false })
  @Type(() => OfferCreateWithoutTargetInput)
  create!: OfferCreateWithoutTargetInput
}
