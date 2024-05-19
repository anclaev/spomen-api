import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { OfferCreateWithoutTargetInput } from './offer-create-without-target.input'
import { Type } from 'class-transformer'
import { OfferCreateOrConnectWithoutTargetInput } from './offer-create-or-connect-without-target.input'
import { OfferUpsertWithWhereUniqueWithoutTargetInput } from './offer-upsert-with-where-unique-without-target.input'
import { OfferCreateManyTargetInputEnvelope } from './offer-create-many-target-input-envelope.input'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { OfferUpdateWithWhereUniqueWithoutTargetInput } from './offer-update-with-where-unique-without-target.input'
import { OfferUpdateManyWithWhereWithoutTargetInput } from './offer-update-many-with-where-without-target.input'
import { OfferScalarWhereInput } from './offer-scalar-where.input'

@InputType()
export class OfferUpdateManyWithoutTargetNestedInput {
  @Field(() => [OfferCreateWithoutTargetInput], { nullable: true })
  @Type(() => OfferCreateWithoutTargetInput)
  create?: Array<OfferCreateWithoutTargetInput>

  @Field(() => [OfferCreateOrConnectWithoutTargetInput], { nullable: true })
  @Type(() => OfferCreateOrConnectWithoutTargetInput)
  connectOrCreate?: Array<OfferCreateOrConnectWithoutTargetInput>

  @Field(() => [OfferUpsertWithWhereUniqueWithoutTargetInput], {
    nullable: true,
  })
  @Type(() => OfferUpsertWithWhereUniqueWithoutTargetInput)
  upsert?: Array<OfferUpsertWithWhereUniqueWithoutTargetInput>

  @Field(() => OfferCreateManyTargetInputEnvelope, { nullable: true })
  @Type(() => OfferCreateManyTargetInputEnvelope)
  createMany?: OfferCreateManyTargetInputEnvelope

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

  @Field(() => [OfferUpdateWithWhereUniqueWithoutTargetInput], {
    nullable: true,
  })
  @Type(() => OfferUpdateWithWhereUniqueWithoutTargetInput)
  update?: Array<OfferUpdateWithWhereUniqueWithoutTargetInput>

  @Field(() => [OfferUpdateManyWithWhereWithoutTargetInput], { nullable: true })
  @Type(() => OfferUpdateManyWithWhereWithoutTargetInput)
  updateMany?: Array<OfferUpdateManyWithWhereWithoutTargetInput>

  @Field(() => [OfferScalarWhereInput], { nullable: true })
  @Type(() => OfferScalarWhereInput)
  deleteMany?: Array<OfferScalarWhereInput>
}
