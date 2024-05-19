import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateManyLoveInput } from './love-event-create-many-love.input'
import { Type } from 'class-transformer'

@InputType()
export class LoveEventCreateManyLoveInputEnvelope {
  @Field(() => [LoveEventCreateManyLoveInput], { nullable: false })
  @Type(() => LoveEventCreateManyLoveInput)
  data!: Array<LoveEventCreateManyLoveInput>
}
