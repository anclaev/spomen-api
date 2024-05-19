import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferCreateWithoutOwnerInput } from './offer-create-without-owner.input'
import { Type } from 'class-transformer'
import { OfferCreateOrConnectWithoutOwnerInput } from './offer-create-or-connect-without-owner.input'
import { OfferCreateManyOwnerInputEnvelope } from './offer-create-many-owner-input-envelope.input'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'

@InputType()
export class OfferUncheckedCreateNestedManyWithoutOwnerInput {
  @Field(() => [OfferCreateWithoutOwnerInput], { nullable: true })
  @Type(() => OfferCreateWithoutOwnerInput)
  create?: Array<OfferCreateWithoutOwnerInput>

  @Field(() => [OfferCreateOrConnectWithoutOwnerInput], { nullable: true })
  @Type(() => OfferCreateOrConnectWithoutOwnerInput)
  connectOrCreate?: Array<OfferCreateOrConnectWithoutOwnerInput>

  @Field(() => OfferCreateManyOwnerInputEnvelope, { nullable: true })
  @Type(() => OfferCreateManyOwnerInputEnvelope)
  createMany?: OfferCreateManyOwnerInputEnvelope

  @Field(() => [OfferWhereUniqueInput], { nullable: true })
  @Type(() => OfferWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id'>>
}
