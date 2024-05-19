import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveCreateInput } from './love-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneLoveArgs {
  @Field(() => LoveCreateInput, { nullable: false })
  @Type(() => LoveCreateInput)
  data!: LoveCreateInput
}
