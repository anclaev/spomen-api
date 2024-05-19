import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateWithoutReviewsInput } from './love-event-create-without-reviews.input'
import { Type } from 'class-transformer'
import { LoveEventCreateOrConnectWithoutReviewsInput } from './love-event-create-or-connect-without-reviews.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'

@InputType()
export class LoveEventCreateNestedOneWithoutReviewsInput {
  @Field(() => LoveEventCreateWithoutReviewsInput, { nullable: true })
  @Type(() => LoveEventCreateWithoutReviewsInput)
  create?: LoveEventCreateWithoutReviewsInput

  @Field(() => LoveEventCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => LoveEventCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: LoveEventCreateOrConnectWithoutReviewsInput

  @Field(() => LoveEventWhereUniqueInput, { nullable: true })
  @Type(() => LoveEventWhereUniqueInput)
  connect?: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>
}
