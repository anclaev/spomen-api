import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateWithoutLoveInput } from './event-create-without-love.input'
import { Type } from 'class-transformer'
import { EventCreateOrConnectWithoutLoveInput } from './event-create-or-connect-without-love.input'
import { EventCreateManyLoveInputEnvelope } from './event-create-many-love-input-envelope.input'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'

@InputType()
export class EventUncheckedCreateNestedManyWithoutLoveInput {
  @Field(() => [EventCreateWithoutLoveInput], { nullable: true })
  @Type(() => EventCreateWithoutLoveInput)
  create?: Array<EventCreateWithoutLoveInput>

  @Field(() => [EventCreateOrConnectWithoutLoveInput], { nullable: true })
  @Type(() => EventCreateOrConnectWithoutLoveInput)
  connectOrCreate?: Array<EventCreateOrConnectWithoutLoveInput>

  @Field(() => EventCreateManyLoveInputEnvelope, { nullable: true })
  @Type(() => EventCreateManyLoveInputEnvelope)
  createMany?: EventCreateManyLoveInputEnvelope

  @Field(() => [EventWhereUniqueInput], { nullable: true })
  @Type(() => EventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<EventWhereUniqueInput, 'id'>>
}
