import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ReviewWhereUniqueInput } from './review-where-unique.input'
import { Type } from 'class-transformer'
import { ReviewCreateWithoutEventInput } from './review-create-without-event.input'

@InputType()
export class ReviewCreateOrConnectWithoutEventInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>

  @Field(() => ReviewCreateWithoutEventInput, { nullable: false })
  @Type(() => ReviewCreateWithoutEventInput)
  create!: ReviewCreateWithoutEventInput
}
