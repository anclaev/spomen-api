import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { EventCreateManyOwnerInput } from './event-create-many-owner.input'
import { Type } from 'class-transformer'

@InputType()
export class EventCreateManyOwnerInputEnvelope {
  @Field(() => [EventCreateManyOwnerInput], { nullable: false })
  @Type(() => EventCreateManyOwnerInput)
  data!: Array<EventCreateManyOwnerInput>
}
