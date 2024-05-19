import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventWhereInput } from './love-event-where.input'

@InputType()
export class LoveEventRelationFilter {
  @Field(() => LoveEventWhereInput, { nullable: true })
  is?: LoveEventWhereInput

  @Field(() => LoveEventWhereInput, { nullable: true })
  isNot?: LoveEventWhereInput
}
