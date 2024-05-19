import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventWhereInput } from './love-event-where.input'

@InputType()
export class LoveEventListRelationFilter {
  @Field(() => LoveEventWhereInput, { nullable: true })
  every?: LoveEventWhereInput

  @Field(() => LoveEventWhereInput, { nullable: true })
  some?: LoveEventWhereInput

  @Field(() => LoveEventWhereInput, { nullable: true })
  none?: LoveEventWhereInput
}
