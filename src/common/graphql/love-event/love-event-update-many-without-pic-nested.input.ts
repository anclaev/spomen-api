import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateWithoutPicInput } from './love-event-create-without-pic.input'
import { Type } from 'class-transformer'
import { LoveEventCreateOrConnectWithoutPicInput } from './love-event-create-or-connect-without-pic.input'
import { LoveEventUpsertWithWhereUniqueWithoutPicInput } from './love-event-upsert-with-where-unique-without-pic.input'
import { LoveEventCreateManyPicInputEnvelope } from './love-event-create-many-pic-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { LoveEventUpdateWithWhereUniqueWithoutPicInput } from './love-event-update-with-where-unique-without-pic.input'
import { LoveEventUpdateManyWithWhereWithoutPicInput } from './love-event-update-many-with-where-without-pic.input'
import { LoveEventScalarWhereInput } from './love-event-scalar-where.input'

@InputType()
export class LoveEventUpdateManyWithoutPicNestedInput {
  @Field(() => [LoveEventCreateWithoutPicInput], { nullable: true })
  @Type(() => LoveEventCreateWithoutPicInput)
  create?: Array<LoveEventCreateWithoutPicInput>

  @Field(() => [LoveEventCreateOrConnectWithoutPicInput], { nullable: true })
  @Type(() => LoveEventCreateOrConnectWithoutPicInput)
  connectOrCreate?: Array<LoveEventCreateOrConnectWithoutPicInput>

  @Field(() => [LoveEventUpsertWithWhereUniqueWithoutPicInput], {
    nullable: true,
  })
  @Type(() => LoveEventUpsertWithWhereUniqueWithoutPicInput)
  upsert?: Array<LoveEventUpsertWithWhereUniqueWithoutPicInput>

  @Field(() => LoveEventCreateManyPicInputEnvelope, { nullable: true })
  @Type(() => LoveEventCreateManyPicInputEnvelope)
  createMany?: LoveEventCreateManyPicInputEnvelope

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

  @Field(() => [LoveEventUpdateWithWhereUniqueWithoutPicInput], {
    nullable: true,
  })
  @Type(() => LoveEventUpdateWithWhereUniqueWithoutPicInput)
  update?: Array<LoveEventUpdateWithWhereUniqueWithoutPicInput>

  @Field(() => [LoveEventUpdateManyWithWhereWithoutPicInput], {
    nullable: true,
  })
  @Type(() => LoveEventUpdateManyWithWhereWithoutPicInput)
  updateMany?: Array<LoveEventUpdateManyWithWhereWithoutPicInput>

  @Field(() => [LoveEventScalarWhereInput], { nullable: true })
  @Type(() => LoveEventScalarWhereInput)
  deleteMany?: Array<LoveEventScalarWhereInput>
}
