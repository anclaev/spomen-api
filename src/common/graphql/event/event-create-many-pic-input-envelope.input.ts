import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateManyPicInput } from './event-create-many-pic.input'
import { Type } from 'class-transformer'

@InputType()
export class EventCreateManyPicInputEnvelope {
  @Field(() => [EventCreateManyPicInput], { nullable: false })
  @Type(() => EventCreateManyPicInput)
  data!: Array<EventCreateManyPicInput>
}
