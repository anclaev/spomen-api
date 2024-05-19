import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateManyEventInput } from './review-create-many-event.input'
import { Type } from 'class-transformer'

@InputType()
export class ReviewCreateManyEventInputEnvelope {
  @Field(() => [ReviewCreateManyEventInput], { nullable: false })
  @Type(() => ReviewCreateManyEventInput)
  data!: Array<ReviewCreateManyEventInput>
}
