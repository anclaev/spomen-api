import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateWithoutLoveInput } from './love-event-create-without-love.input'
import { Type } from 'class-transformer'
import { LoveEventCreateOrConnectWithoutLoveInput } from './love-event-create-or-connect-without-love.input'
import { LoveEventUpsertWithWhereUniqueWithoutLoveInput } from './love-event-upsert-with-where-unique-without-love.input'
import { LoveEventCreateManyLoveInputEnvelope } from './love-event-create-many-love-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { LoveEventUpdateWithWhereUniqueWithoutLoveInput } from './love-event-update-with-where-unique-without-love.input'
import { LoveEventUpdateManyWithWhereWithoutLoveInput } from './love-event-update-many-with-where-without-love.input'
import { LoveEventScalarWhereInput } from './love-event-scalar-where.input'

@InputType()
export class LoveEventUpdateManyWithoutLoveNestedInput {
  @Field(() => [LoveEventCreateWithoutLoveInput], { nullable: true })
  @Type(() => LoveEventCreateWithoutLoveInput)
  create?: Array<LoveEventCreateWithoutLoveInput>

  @Field(() => [LoveEventCreateOrConnectWithoutLoveInput], { nullable: true })
  @Type(() => LoveEventCreateOrConnectWithoutLoveInput)
  connectOrCreate?: Array<LoveEventCreateOrConnectWithoutLoveInput>

  @Field(() => [LoveEventUpsertWithWhereUniqueWithoutLoveInput], {
    nullable: true,
  })
  @Type(() => LoveEventUpsertWithWhereUniqueWithoutLoveInput)
  upsert?: Array<LoveEventUpsertWithWhereUniqueWithoutLoveInput>

  @Field(() => LoveEventCreateManyLoveInputEnvelope, { nullable: true })
  @Type(() => LoveEventCreateManyLoveInputEnvelope)
  createMany?: LoveEventCreateManyLoveInputEnvelope

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

  @Field(() => [LoveEventUpdateWithWhereUniqueWithoutLoveInput], {
    nullable: true,
  })
  @Type(() => LoveEventUpdateWithWhereUniqueWithoutLoveInput)
  update?: Array<LoveEventUpdateWithWhereUniqueWithoutLoveInput>

  @Field(() => [LoveEventUpdateManyWithWhereWithoutLoveInput], {
    nullable: true,
  })
  @Type(() => LoveEventUpdateManyWithWhereWithoutLoveInput)
  updateMany?: Array<LoveEventUpdateManyWithWhereWithoutLoveInput>

  @Field(() => [LoveEventScalarWhereInput], { nullable: true })
  @Type(() => LoveEventScalarWhereInput)
  deleteMany?: Array<LoveEventScalarWhereInput>
}
