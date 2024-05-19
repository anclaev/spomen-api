import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventCreateInput } from './love-event-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneLoveEventArgs {
  @Field(() => LoveEventCreateInput, { nullable: false })
  @Type(() => LoveEventCreateInput)
  data!: LoveEventCreateInput
}
