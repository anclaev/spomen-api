import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventReviewUpdateWithoutAuthorInput } from './love-event-review-update-without-author.input'
import { LoveEventReviewCreateWithoutAuthorInput } from './love-event-review-create-without-author.input'

@InputType()
export class LoveEventReviewUpsertWithWhereUniqueWithoutAuthorInput {
  @Field(() => LoveEventReviewWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventReviewWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>

  @Field(() => LoveEventReviewUpdateWithoutAuthorInput, { nullable: false })
  @Type(() => LoveEventReviewUpdateWithoutAuthorInput)
  update!: LoveEventReviewUpdateWithoutAuthorInput

  @Field(() => LoveEventReviewCreateWithoutAuthorInput, { nullable: false })
  @Type(() => LoveEventReviewCreateWithoutAuthorInput)
  create!: LoveEventReviewCreateWithoutAuthorInput
}
