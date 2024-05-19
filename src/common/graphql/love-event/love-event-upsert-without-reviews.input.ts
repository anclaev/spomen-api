import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventUpdateWithoutReviewsInput } from './love-event-update-without-reviews.input'
import { Type } from 'class-transformer'
import { LoveEventCreateWithoutReviewsInput } from './love-event-create-without-reviews.input'
import { LoveEventWhereInput } from './love-event-where.input'

@InputType()
export class LoveEventUpsertWithoutReviewsInput {
  @Field(() => LoveEventUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => LoveEventUpdateWithoutReviewsInput)
  update!: LoveEventUpdateWithoutReviewsInput

  @Field(() => LoveEventCreateWithoutReviewsInput, { nullable: false })
  @Type(() => LoveEventCreateWithoutReviewsInput)
  create!: LoveEventCreateWithoutReviewsInput

  @Field(() => LoveEventWhereInput, { nullable: true })
  @Type(() => LoveEventWhereInput)
  where?: LoveEventWhereInput
}
