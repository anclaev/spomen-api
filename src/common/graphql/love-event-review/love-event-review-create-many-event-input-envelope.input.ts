import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewCreateManyEventInput } from './love-event-review-create-many-event.input'
import { Type } from 'class-transformer'

@InputType()
export class LoveEventReviewCreateManyEventInputEnvelope {
  @Field(() => [LoveEventReviewCreateManyEventInput], { nullable: false })
  @Type(() => LoveEventReviewCreateManyEventInput)
  data!: Array<LoveEventReviewCreateManyEventInput>
}
