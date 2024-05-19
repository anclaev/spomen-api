import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventReviewWhereInput } from './love-event-review-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyLoveEventReviewArgs {
  @Field(() => LoveEventReviewWhereInput, { nullable: true })
  @Type(() => LoveEventReviewWhereInput)
  where?: LoveEventReviewWhereInput
}
