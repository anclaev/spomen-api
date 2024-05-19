import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { Type } from 'class-transformer'
import { EventCreateWithoutLoveInput } from './event-create-without-love.input'

@InputType()
export class EventCreateOrConnectWithoutLoveInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>

  @Field(() => EventCreateWithoutLoveInput, { nullable: false })
  @Type(() => EventCreateWithoutLoveInput)
  create!: EventCreateWithoutLoveInput
}
