import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveCreateManyInput } from './love-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyLoveArgs {
  @Field(() => [LoveCreateManyInput], { nullable: false })
  @Type(() => LoveCreateManyInput)
  data!: Array<LoveCreateManyInput>
}
