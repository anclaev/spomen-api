import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewWhereInput } from './love-event-review-where.input'

@InputType()
export class LoveEventReviewListRelationFilter {
  @Field(() => LoveEventReviewWhereInput, { nullable: true })
  every?: LoveEventReviewWhereInput

  @Field(() => LoveEventReviewWhereInput, { nullable: true })
  some?: LoveEventReviewWhereInput

  @Field(() => LoveEventReviewWhereInput, { nullable: true })
  none?: LoveEventReviewWhereInput
}
