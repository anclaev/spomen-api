import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventWhereInput } from './love-event-where.input'
import { Type } from 'class-transformer'
import { LoveEventUpdateWithoutReviewsInput } from './love-event-update-without-reviews.input'

@InputType()
export class LoveEventUpdateToOneWithWhereWithoutReviewsInput {
  @Field(() => LoveEventWhereInput, { nullable: true })
  @Type(() => LoveEventWhereInput)
  where?: LoveEventWhereInput

  @Field(() => LoveEventUpdateWithoutReviewsInput, { nullable: false })
  @Type(() => LoveEventUpdateWithoutReviewsInput)
  data!: LoveEventUpdateWithoutReviewsInput
}
