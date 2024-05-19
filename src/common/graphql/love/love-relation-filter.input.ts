import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveWhereInput } from './love-where.input'

@InputType()
export class LoveRelationFilter {
  @Field(() => LoveWhereInput, { nullable: true })
  is?: LoveWhereInput

  @Field(() => LoveWhereInput, { nullable: true })
  isNot?: LoveWhereInput
}
