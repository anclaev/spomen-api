import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventReviewCreateInput } from './love-event-review-create.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateOneLoveEventReviewArgs {
  @Field(() => LoveEventReviewCreateInput, { nullable: false })
  @Type(() => LoveEventReviewCreateInput)
  data!: LoveEventReviewCreateInput
}
