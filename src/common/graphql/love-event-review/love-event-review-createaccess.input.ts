import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Access } from '../prisma/access.enum'

@InputType()
export class LoveEventReviewCreateaccessInput {
  @Field(() => [Access], { nullable: false })
  set!: Array<keyof typeof Access>
}
