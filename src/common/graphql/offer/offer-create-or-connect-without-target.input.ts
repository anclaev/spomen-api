import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Type } from 'class-transformer'
import { OfferCreateWithoutTargetInput } from './offer-create-without-target.input'

@InputType()
export class OfferCreateOrConnectWithoutTargetInput {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  @Type(() => OfferWhereUniqueInput)
  where!: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>

  @Field(() => OfferCreateWithoutTargetInput, { nullable: false })
  @Type(() => OfferCreateWithoutTargetInput)
  create!: OfferCreateWithoutTargetInput
}
