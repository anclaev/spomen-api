import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { Type } from 'class-transformer'
import { EventUpdateWithoutOwnerInput } from './event-update-without-owner.input'

@InputType()
export class EventUpdateWithWhereUniqueWithoutOwnerInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>

  @Field(() => EventUpdateWithoutOwnerInput, { nullable: false })
  @Type(() => EventUpdateWithoutOwnerInput)
  data!: EventUpdateWithoutOwnerInput
}
