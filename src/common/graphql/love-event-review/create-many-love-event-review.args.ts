import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventReviewCreateManyInput } from './love-event-review-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyLoveEventReviewArgs {
  @Field(() => [LoveEventReviewCreateManyInput], { nullable: false })
  @Type(() => LoveEventReviewCreateManyInput)
  data!: Array<LoveEventReviewCreateManyInput>
}
