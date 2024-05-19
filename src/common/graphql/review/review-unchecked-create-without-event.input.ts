import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateaccessInput } from './review-createaccess.input'

@InputType()
export class ReviewUncheckedCreateWithoutEventInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => ReviewCreateaccessInput, { nullable: true })
  access?: ReviewCreateaccessInput

  @Field(() => String, { nullable: false })
  authorId!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
