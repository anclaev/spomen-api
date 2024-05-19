import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateManyAuthorInput } from './review-create-many-author.input'
import { Type } from 'class-transformer'

@InputType()
export class ReviewCreateManyAuthorInputEnvelope {
  @Field(() => [ReviewCreateManyAuthorInput], { nullable: false })
  @Type(() => ReviewCreateManyAuthorInput)
  data!: Array<ReviewCreateManyAuthorInput>
}
