import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveWhereInput } from './love-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyLoveArgs {
  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput
}
