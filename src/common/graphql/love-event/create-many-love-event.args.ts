import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventCreateManyInput } from './love-event-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyLoveEventArgs {
  @Field(() => [LoveEventCreateManyInput], { nullable: false })
  @Type(() => LoveEventCreateManyInput)
  data!: Array<LoveEventCreateManyInput>
}
