import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateWithoutLoveInput } from './event-create-without-love.input'
import { Type } from 'class-transformer'
import { EventCreateOrConnectWithoutLoveInput } from './event-create-or-connect-without-love.input'
import { EventUpsertWithWhereUniqueWithoutLoveInput } from './event-upsert-with-where-unique-without-love.input'
import { EventCreateManyLoveInputEnvelope } from './event-create-many-love-input-envelope.input'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { EventUpdateWithWhereUniqueWithoutLoveInput } from './event-update-with-where-unique-without-love.input'
import { EventUpdateManyWithWhereWithoutLoveInput } from './event-update-many-with-where-without-love.input'
import { EventScalarWhereInput } from './event-scalar-where.input'

@InputType()
export class EventUncheckedUpdateManyWithoutLoveNestedInput {
  @Field(() => [EventCreateWithoutLoveInput], { nullable: true })
  @Type(() => EventCreateWithoutLoveInput)
  create?: Array<EventCreateWithoutLoveInput>

  @Field(() => [EventCreateOrConnectWithoutLoveInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutLoveInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutLoveInput>

  @Field(() => [EventUpsertWithWhereUniqueWithoutLoveInput], { nullable: true })
  @Type(() => EventUpsertWithWhereUniqueWithoutLoveInput)
  upsert?: Array<EventUpsertWithWhereUniqueWithoutLoveInput>

  @Field(() => EventCreateManyLoveInputEnvelope, { nullable: true })
  @Type(() => EventCreateManyLoveInputEnvelope)
  createMany?: EventCreateManyLoveInputEnvelope

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  set?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>

  @Field(() => [EventUpdateWithWhereUniqueWithoutLoveInput], { nullable: true })
  @Type(() => EventUpdateWithWhereUniqueWithoutLoveInput)
  update?: Array<EventUpdateWithWhereUniqueWithoutLoveInput>

  @Field(() => [EventUpdateManyWithWhereWithoutLoveInput], { nullable: true })
  @Type(() => EventUpdateManyWithWhereWithoutLoveInput)
  updateMany?: Array<EventUpdateManyWithWhereWithoutLoveInput>

  @Field(() => [EventScalarWhereInput], { nullable: true })
  @Type(() => EventScalarWhereInput)
  deleteMany?: Array<EventScalarWhereInput>
}
