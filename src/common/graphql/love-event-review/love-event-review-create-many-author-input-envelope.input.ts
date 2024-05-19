import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewCreateManyAuthorInput } from './love-event-review-create-many-author.input'
import { Type } from 'class-transformer'

@InputType()
export class LoveEventReviewCreateManyAuthorInputEnvelope {
  @Field(() => [LoveEventReviewCreateManyAuthorInput], { nullable: false })
  @Type(() => LoveEventReviewCreateManyAuthorInput)
  data!: Array<LoveEventReviewCreateManyAuthorInput>
}
