import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateManyPicInput } from './love-event-create-many-pic.input'
import { Type } from 'class-transformer'

@InputType()
export class LoveEventCreateManyPicInputEnvelope {
  @Field(() => [LoveEventCreateManyPicInput], { nullable: false })
  @Type(() => LoveEventCreateManyPicInput)
  data!: Array<LoveEventCreateManyPicInput>
}
