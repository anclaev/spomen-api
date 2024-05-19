import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateWithoutPicInput } from './event-create-without-pic.input'
import { Type } from 'class-transformer'
import { EventCreateOrConnectWithoutPicInput } from './event-create-or-connect-without-pic.input'
import { EventCreateManyPicInputEnvelope } from './event-create-many-pic-input-envelope.input'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'

@InputType()
export class EventUncheckedCreateNestedManyWithoutPicInput {
  @Field(() => [EventCreateWithoutPicInput], { nullable: true })
  @Type(() => EventCreateWithoutPicInput)
  create?: Array<EventCreateWithoutPicInput>

  @Field(() => [EventCreateOrConnectWithoutPicInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutPicInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutPicInput>

  @Field(() => EventCreateManyPicInputEnvelope, { nullable: true })
  @Type(() => EventCreateManyPicInputEnvelope)
  createMany?: EventCreateManyPicInputEnvelope

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
}
