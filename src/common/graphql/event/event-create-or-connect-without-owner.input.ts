import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { Type } from 'class-transformer'
import { EventCreateWithoutOwnerInput } from './event-create-without-owner.input'

@InputType()
export class EventCreateOrConnectWithoutOwnerInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>

  @Field(() => EventCreateWithoutOwnerInput, { nullable: false })
  @Type(() => EventCreateWithoutOwnerInput)
  create!: EventCreateWithoutOwnerInput
}
