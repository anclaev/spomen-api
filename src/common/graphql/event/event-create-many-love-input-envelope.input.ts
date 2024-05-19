import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateManyLoveInput } from './event-create-many-love.input'
import { Type } from 'class-transformer'

@InputType()
export class EventCreateManyLoveInputEnvelope {
  @Field(() => [EventCreateManyLoveInput], { nullable: false })
  @Type(() => EventCreateManyLoveInput)
  data!: Array<EventCreateManyLoveInput>
}
