import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventReviewCreateWithoutAuthorInput } from './love-event-review-create-without-author.input'

@InputType()
export class LoveEventReviewCreateOrConnectWithoutAuthorInput {
  @Field(() => LoveEventReviewWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventReviewWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>

  @Field(() => LoveEventReviewCreateWithoutAuthorInput, { nullable: false })
  @Type(() => LoveEventReviewCreateWithoutAuthorInput)
  create!: LoveEventReviewCreateWithoutAuthorInput
}
