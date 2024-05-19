import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateWithoutOwnerInput } from './event-create-without-owner.input'
import { Type } from 'class-transformer'
import { EventCreateOrConnectWithoutOwnerInput } from './event-create-or-connect-without-owner.input'
import { EventCreateManyOwnerInputEnvelope } from './event-create-many-owner-input-envelope.input'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'

@InputType()
export class EventUncheckedCreateNestedManyWithoutOwnerInput {
  @Field(() => [EventCreateWithoutOwnerInput], { nullable: true })
  @Type(() => EventCreateWithoutOwnerInput)
  create?: Array<EventCreateWithoutOwnerInput>

  @Field(() => [EventCreateOrConnectWithoutOwnerInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutOwnerInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutOwnerInput>

  @Field(() => EventCreateManyOwnerInputEnvelope, { nullable: true })
  @Type(() => EventCreateManyOwnerInputEnvelope)
  createMany?: EventCreateManyOwnerInputEnvelope

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
}
