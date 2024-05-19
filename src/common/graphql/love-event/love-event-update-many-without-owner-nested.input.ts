import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateWithoutOwnerInput } from './love-event-create-without-owner.input'
import { Type } from 'class-transformer'
import { LoveEventCreateOrConnectWithoutOwnerInput } from './love-event-create-or-connect-without-owner.input'
import { LoveEventUpsertWithWhereUniqueWithoutOwnerInput } from './love-event-upsert-with-where-unique-without-owner.input'
import { LoveEventCreateManyOwnerInputEnvelope } from './love-event-create-many-owner-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { LoveEventUpdateWithWhereUniqueWithoutOwnerInput } from './love-event-update-with-where-unique-without-owner.input'
import { LoveEventUpdateManyWithWhereWithoutOwnerInput } from './love-event-update-many-with-where-without-owner.input'
import { LoveEventScalarWhereInput } from './love-event-scalar-where.input'

@InputType()
export class LoveEventUpdateManyWithoutOwnerNestedInput {
  @Field(() => [LoveEventCreateWithoutOwnerInput], { nullable: true })
  @Type(() => LoveEventCreateWithoutOwnerInput)
  create?: Array<LoveEventCreateWithoutOwnerInput>

  @Field(() => [LoveEventCreateOrConnectWithoutOwnerInput], { nullable: true })
  @Type(() => LoveEventCreateOrConnectWithoutOwnerInput)
  connectOrCreate?: Array<LoveEventCreateOrConnectWithoutOwnerInput>

  @Field(() => [LoveEventUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  @Type(() => LoveEventUpsertWithWhereUniqueWithoutOwnerInput)
  upsert?: Array<LoveEventUpsertWithWhereUniqueWithoutOwnerInput>

  @Field(() => LoveEventCreateManyOwnerInputEnvelope, { nullable: true })
  @Type(() => LoveEventCreateManyOwnerInputEnvelope)
  createMany?: LoveEventCreateManyOwnerInputEnvelope

  @Field(() => [LoveEventWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventWhereUniqueInput)
  set?: Array<Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>>

  @Field(() => [LoveEventWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>>

  @Field(() => [LoveEventWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>>

  @Field(() => [LoveEventWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>>

  @Field(() => [LoveEventUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  @Type(() => LoveEventUpdateWithWhereUniqueWithoutOwnerInput)
  update?: Array<LoveEventUpdateWithWhereUniqueWithoutOwnerInput>

  @Field(() => [LoveEventUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true,
  })
  @Type(() => LoveEventUpdateManyWithWhereWithoutOwnerInput)
  updateMany?: Array<LoveEventUpdateManyWithWhereWithoutOwnerInput>

  @Field(() => [LoveEventScalarWhereInput], { nullable: true })
  @Type(() => LoveEventScalarWhereInput)
  deleteMany?: Array<LoveEventScalarWhereInput>
}
