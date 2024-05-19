import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferCreateWithoutLoveInput } from './offer-create-without-love.input'
import { Type } from 'class-transformer'
import { OfferCreateOrConnectWithoutLoveInput } from './offer-create-or-connect-without-love.input'
import { OfferCreateManyLoveInputEnvelope } from './offer-create-many-love-input-envelope.input'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'

@InputType()
export class OfferUncheckedCreateNestedManyWithoutLoveInput {
  @Field(() => [OfferCreateWithoutLoveInput], { nullable: true })
  @Type(() => OfferCreateWithoutLoveInput)
  create?: Array<OfferCreateWithoutLoveInput>

  @Field(() => [OfferCreateOrConnectWithoutLoveInput], { nullable: true })
  @Type(() => OfferCreateOrConnectWithoutLoveInput)
  connectOrCreate?: Array<OfferCreateOrConnectWithoutLoveInput>

  @Field(() => OfferCreateManyLoveInputEnvelope, { nullable: true })
  @Type(() => OfferCreateManyLoveInputEnvelope)
  createMany?: OfferCreateManyLoveInputEnvelope

  @Field(() => [OfferWhereUniqueInput], { nullable: true })
  @Type(() => OfferWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id'>>
}
