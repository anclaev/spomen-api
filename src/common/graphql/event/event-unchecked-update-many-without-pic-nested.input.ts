import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateWithoutPicInput } from './event-create-without-pic.input'
import { Type } from 'class-transformer'
import { EventCreateOrConnectWithoutPicInput } from './event-create-or-connect-without-pic.input'
import { EventUpsertWithWhereUniqueWithoutPicInput } from './event-upsert-with-where-unique-without-pic.input'
import { EventCreateManyPicInputEnvelope } from './event-create-many-pic-input-envelope.input'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { EventUpdateWithWhereUniqueWithoutPicInput } from './event-update-with-where-unique-without-pic.input'
import { EventUpdateManyWithWhereWithoutPicInput } from './event-update-many-with-where-without-pic.input'
import { EventScalarWhereInput } from './event-scalar-where.input'

@InputType()
export class EventUncheckedUpdateManyWithoutPicNestedInput {
  @Field(() => [EventCreateWithoutPicInput], { nullable: true })
  @Type(() => EventCreateWithoutPicInput)
  create?: Array<EventCreateWithoutPicInput>

  @Field(() => [EventCreateOrConnectWithoutPicInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutPicInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutPicInput>

  @Field(() => [EventUpsertWithWhereUniqueWithoutPicInput], { nullable: true })
  @Type(() => EventUpsertWithWhereUniqueWithoutPicInput)
  upsert?: Array<EventUpsertWithWhereUniqueWithoutPicInput>

  @Field(() => EventCreateManyPicInputEnvelope, { nullable: true })
  @Type(() => EventCreateManyPicInputEnvelope)
  createMany?: EventCreateManyPicInputEnvelope

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

  @Field(() => [EventUpdateWithWhereUniqueWithoutPicInput], { nullable: true })
  @Type(() => EventUpdateWithWhereUniqueWithoutPicInput)
  update?: Array<EventUpdateWithWhereUniqueWithoutPicInput>

  @Field(() => [EventUpdateManyWithWhereWithoutPicInput], { nullable: true })
  @Type(() => EventUpdateManyWithWhereWithoutPicInput)
  updateMany?: Array<EventUpdateManyWithWhereWithoutPicInput>

  @Field(() => [EventScalarWhereInput], { nullable: true })
  @Type(() => EventScalarWhereInput)
  deleteMany?: Array<EventScalarWhereInput>
}
