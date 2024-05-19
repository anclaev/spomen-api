import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { Type } from 'class-transformer'
import { EventUpdateWithoutOwnerInput } from './event-update-without-owner.input'
import { EventCreateWithoutOwnerInput } from './event-create-without-owner.input'

@InputType()
export class EventUpsertWithWhereUniqueWithoutOwnerInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>

  @Field(() => EventUpdateWithoutOwnerInput, { nullable: false })
  @Type(() => EventUpdateWithoutOwnerInput)
  update!: EventUpdateWithoutOwnerInput

  @Field(() => EventCreateWithoutOwnerInput, { nullable: false })
  @Type(() => EventCreateWithoutOwnerInput)
  create!: EventCreateWithoutOwnerInput
}
