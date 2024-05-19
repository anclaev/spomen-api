import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferCreateWithoutLoveInput } from './offer-create-without-love.input'
import { Type } from 'class-transformer'
import { OfferCreateOrConnectWithoutLoveInput } from './offer-create-or-connect-without-love.input'
import { OfferUpsertWithWhereUniqueWithoutLoveInput } from './offer-upsert-with-where-unique-without-love.input'
import { OfferCreateManyLoveInputEnvelope } from './offer-create-many-love-input-envelope.input'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { OfferUpdateWithWhereUniqueWithoutLoveInput } from './offer-update-with-where-unique-without-love.input'
import { OfferUpdateManyWithWhereWithoutLoveInput } from './offer-update-many-with-where-without-love.input'
import { OfferScalarWhereInput } from './offer-scalar-where.input'

@InputType()
export class OfferUncheckedUpdateManyWithoutLoveNestedInput {
  @Field(() => [OfferCreateWithoutLoveInput], { nullable: true })
  @Type(() => OfferCreateWithoutLoveInput)
  create?: Array<OfferCreateWithoutLoveInput>

  @Field(() => [OfferCreateOrConnectWithoutLoveInput], { nullable: true })
  @Type(() => OfferCreateOrConnectWithoutLoveInput)
  connectOrCreate?: Array<OfferCreateOrConnectWithoutLoveInput>

  @Field(() => [OfferUpsertWithWhereUniqueWithoutLoveInput], { nullable: true })
  @Type(() => OfferUpsertWithWhereUniqueWithoutLoveInput)
  upsert?: Array<OfferUpsertWithWhereUniqueWithoutLoveInput>

  @Field(() => OfferCreateManyLoveInputEnvelope, { nullable: true })
  @Type(() => OfferCreateManyLoveInputEnvelope)
  createMany?: OfferCreateManyLoveInputEnvelope

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

  @Field(() => [OfferUpdateWithWhereUniqueWithoutLoveInput], { nullable: true })
  @Type(() => OfferUpdateWithWhereUniqueWithoutLoveInput)
  update?: Array<OfferUpdateWithWhereUniqueWithoutLoveInput>

  @Field(() => [OfferUpdateManyWithWhereWithoutLoveInput], { nullable: true })
  @Type(() => OfferUpdateManyWithWhereWithoutLoveInput)
  updateMany?: Array<OfferUpdateManyWithWhereWithoutLoveInput>

  @Field(() => [OfferScalarWhereInput], { nullable: true })
  @Type(() => OfferScalarWhereInput)
  deleteMany?: Array<OfferScalarWhereInput>
}
