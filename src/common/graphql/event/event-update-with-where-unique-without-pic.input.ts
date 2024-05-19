import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { EventWhereUniqueInput } from './event-where-unique.input'
import { Type } from 'class-transformer'
import { EventUpdateWithoutPicInput } from './event-update-without-pic.input'

@InputType()
export class EventUpdateWithWhereUniqueWithoutPicInput {
  @Field(() => EventWhereUniqueInput, { nullable: false })
  @Type(() => EventWhereUniqueInput)
  where!: Prisma.AtLeast<EventWhereUniqueInput, 'id'>

  @Field(() => EventUpdateWithoutPicInput, { nullable: false })
  @Type(() => EventUpdateWithoutPicInput)
  data!: EventUpdateWithoutPicInput
}
