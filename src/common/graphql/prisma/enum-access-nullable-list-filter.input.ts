import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Access } from './access.enum'

@InputType()
export class EnumAccessNullableListFilter {
  @Field(() => [Access], { nullable: true })
  equals?: Array<keyof typeof Access>

  @Field(() => Access, { nullable: true })
  has?: keyof typeof Access

  @Field(() => [Access], { nullable: true })
  hasEvery?: Array<keyof typeof Access>

  @Field(() => [Access], { nullable: true })
  hasSome?: Array<keyof typeof Access>

  @Field(() => Boolean, { nullable: true })
  isEmpty?: boolean
}
