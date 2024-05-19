import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateWithoutOwnerInput } from './event-create-without-owner.input'
import { Type } from 'class-transformer'
import { EventCreateOrConnectWithoutOwnerInput } from './event-create-or-connect-without-owner.input'
import { EventUpsertWithWhereUniqueWithoutOwnerInput } from './event-upsert-with-where-unique-without-owner.input'
import { EventCreateManyOwnerInputEnvelope } from './event-create-many-owner-input-envelope.input'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { EventUpdateWithWhereUniqueWithoutOwnerInput } from './event-update-with-where-unique-without-owner.input'
import { EventUpdateManyWithWhereWithoutOwnerInput } from './event-update-many-with-where-without-owner.input'
import { EventScalarWhereInput } from './event-scalar-where.input'

@InputType()
export class EventUncheckedUpdateManyWithoutOwnerNestedInput {
  @Field(() => [EventCreateWithoutOwnerInput], { nullable: true })
  @Type(() => EventCreateWithoutOwnerInput)
  create?: Array<EventCreateWithoutOwnerInput>

  @Field(() => [EventCreateOrConnectWithoutOwnerInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutOwnerInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutOwnerInput>

  @Field(() => [EventUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  @Type(() => EventUpsertWithWhereUniqueWithoutOwnerInput)
  upsert?: Array<EventUpsertWithWhereUniqueWithoutOwnerInput>

  @Field(() => EventCreateManyOwnerInputEnvelope, { nullable: true })
  @Type(() => EventCreateManyOwnerInputEnvelope)
  createMany?: EventCreateManyOwnerInputEnvelope

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

  @Field(() => [EventUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  @Type(() => EventUpdateWithWhereUniqueWithoutOwnerInput)
  update?: Array<EventUpdateWithWhereUniqueWithoutOwnerInput>

  @Field(() => [EventUpdateManyWithWhereWithoutOwnerInput], { nullable: true })
  @Type(() => EventUpdateManyWithWhereWithoutOwnerInput)
  updateMany?: Array<EventUpdateManyWithWhereWithoutOwnerInput>

  @Field(() => [EventScalarWhereInput], { nullable: true })
  @Type(() => EventScalarWhereInput)
  deleteMany?: Array<EventScalarWhereInput>
}
