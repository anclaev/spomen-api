import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ReviewWhereUniqueInput } from './review-where-unique.input'
import { Type } from 'class-transformer'
import { ReviewCreateWithoutAuthorInput } from './review-create-without-author.input'

@InputType()
export class ReviewCreateOrConnectWithoutAuthorInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>

  @Field(() => ReviewCreateWithoutAuthorInput, { nullable: false })
  @Type(() => ReviewCreateWithoutAuthorInput)
  create!: ReviewCreateWithoutAuthorInput
}
