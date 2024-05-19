import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { ReviewWhereUniqueInput } from './review-where-unique.input'
import { Type } from 'class-transformer'
import { ReviewUpdateWithoutEventInput } from './review-update-without-event.input'

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutEventInput {
  @Field(() => ReviewWhereUniqueInput, { nullable: false })
  @Type(() => ReviewWhereUniqueInput)
  where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>

  @Field(() => ReviewUpdateWithoutEventInput, { nullable: false })
  @Type(() => ReviewUpdateWithoutEventInput)
  data!: ReviewUpdateWithoutEventInput
}
