import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Access } from '../prisma/access.enum'

@InputType()
export class ReviewUpdateaccessInput {
  @Field(() => [Access], { nullable: true })
  set?: Array<keyof typeof Access>

  @Field(() => [Access], { nullable: true })
  push?: Array<keyof typeof Access>
}
