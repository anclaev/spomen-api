import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferCreateWithoutOwnerInput } from './offer-create-without-owner.input'
import { Type } from 'class-transformer'
import { OfferCreateOrConnectWithoutOwnerInput } from './offer-create-or-connect-without-owner.input'
import { OfferUpsertWithWhereUniqueWithoutOwnerInput } from './offer-upsert-with-where-unique-without-owner.input'
import { OfferCreateManyOwnerInputEnvelope } from './offer-create-many-owner-input-envelope.input'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { OfferUpdateWithWhereUniqueWithoutOwnerInput } from './offer-update-with-where-unique-without-owner.input'
import { OfferUpdateManyWithWhereWithoutOwnerInput } from './offer-update-many-with-where-without-owner.input'
import { OfferScalarWhereInput } from './offer-scalar-where.input'

@InputType()
export class OfferUncheckedUpdateManyWithoutOwnerNestedInput {
  @Field(() => [OfferCreateWithoutOwnerInput], { nullable: true })
  @Type(() => OfferCreateWithoutOwnerInput)
  create?: Array<OfferCreateWithoutOwnerInput>

  @Field(() => [OfferCreateOrConnectWithoutOwnerInput], { nullable: true })
  @Type(() => OfferCreateOrConnectWithoutOwnerInput)
  connectOrCreate?: Array<OfferCreateOrConnectWithoutOwnerInput>

  @Field(() => [OfferUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  @Type(() => OfferUpsertWithWhereUniqueWithoutOwnerInput)
  upsert?: Array<OfferUpsertWithWhereUniqueWithoutOwnerInput>

  @Field(() => OfferCreateManyOwnerInputEnvelope, { nullable: true })
  @Type(() => OfferCreateManyOwnerInputEnvelope)
  createMany?: OfferCreateManyOwnerInputEnvelope

  @Field(() => [OfferWhereUniqueInput], { nullable: true })
  @Type(() => OfferWhereUniqueInput)
  set?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id'>>

  @Field(() => [OfferWhereUniqueInput], { nullable: true })
  @Type(() => OfferWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id'>>

  @Field(() => [OfferWhereUniqueInput], { nullable: true })
  @Type(() => OfferWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id'>>

  @Field(() => [OfferWhereUniqueInput], { nullable: true })
  @Type(() => OfferWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OfferWhereUniqueInput, 'id'>>

  @Field(() => [OfferUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  @Type(() => OfferUpdateWithWhereUniqueWithoutOwnerInput)
  update?: Array<OfferUpdateWithWhereUniqueWithoutOwnerInput>

  @Field(() => [OfferUpdateManyWithWhereWithoutOwnerInput], { nullable: true })
  @Type(() => OfferUpdateManyWithWhereWithoutOwnerInput)
  updateMany?: Array<OfferUpdateManyWithWhereWithoutOwnerInput>

  @Field(() => [OfferScalarWhereInput], { nullable: true })
  @Type(() => OfferScalarWhereInput)
  deleteMany?: Array<OfferScalarWhereInput>
}
