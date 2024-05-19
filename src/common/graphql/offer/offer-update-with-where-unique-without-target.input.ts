import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Type } from 'class-transformer'
import { OfferUpdateWithoutTargetInput } from './offer-update-without-target.input'

@InputType()
export class OfferUpdateWithWhereUniqueWithoutTargetInput {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  @Type(() => OfferWhereUniqueInput)
  where!: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>

  @Field(() => OfferUpdateWithoutTargetInput, { nullable: false })
  @Type(() => OfferUpdateWithoutTargetInput)
  data!: OfferUpdateWithoutTargetInput
}
