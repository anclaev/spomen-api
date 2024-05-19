import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventCreateWithoutReviewsInput } from './love-event-create-without-reviews.input'

@InputType()
export class LoveEventCreateOrConnectWithoutReviewsInput {
  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventCreateWithoutReviewsInput, { nullable: false })
  @Type(() => LoveEventCreateWithoutReviewsInput)
  create!: LoveEventCreateWithoutReviewsInput
}
