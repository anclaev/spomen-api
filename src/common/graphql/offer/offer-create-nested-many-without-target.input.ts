import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferCreateWithoutTargetInput } from './offer-create-without-target.input'
import { Type } from 'class-transformer'
import { OfferCreateOrConnectWithoutTargetInput } from './offer-create-or-connect-without-target.input'
import { OfferCreateManyTargetInputEnvelope } from './offer-create-many-target-input-envelope.input'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'

@InputType()
export class OfferCreateNestedManyWithoutTargetInput {
  @Field(() => [OfferCreateWithoutTargetInput], { nullable: true })
  @Type(() => OfferCreateWithoutTargetInput)
  create?: Array<OfferCreateWithoutTargetInput>

  @Field(() => [OfferCreateOrConnectWithoutTargetInput], { nullable: true })
  @Type(() => OfferCreateOrConnectWithoutTargetInput)
  connectOrCreate?: Array<OfferCreateOrConnectWithoutTargetInput>

  @Field(() => OfferCreateManyTargetInputEnvelope, { nullable: true })
  @Type(() => OfferCreateManyTargetInputEnvelope)
  createMany?: OfferCreateManyTargetInputEnvelope

  @Field(() => [OfferWhereUniqueInput], { nullable: true })
  @Type(() => OfferWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id'>>
}
