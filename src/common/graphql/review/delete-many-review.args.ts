import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ReviewWhereInput } from './review-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyReviewArgs {
  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  where?: ReviewWhereInput
}
