import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { Type } from 'class-transformer'
import { EventCreateWithoutPicInput } from './event-create-without-pic.input'

@InputType()
export class EventCreateOrConnectWithoutPicInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>

  @Field(() => EventCreateWithoutPicInput, { nullable: false })
  @Type(() => EventCreateWithoutPicInput)
  create!: EventCreateWithoutPicInput
}
