import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateManyOwnerInput } from './love-event-create-many-owner.input'
import { Type } from 'class-transformer'

@InputType()
export class LoveEventCreateManyOwnerInputEnvelope {
  @Field(() => [LoveEventCreateManyOwnerInput], { nullable: false })
  @Type(() => LoveEventCreateManyOwnerInput)
  data!: Array<LoveEventCreateManyOwnerInput>
}
