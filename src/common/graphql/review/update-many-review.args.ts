import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ReviewUpdateManyMutationInput } from './review-update-many-mutation.input'
import { Type } from 'class-transformer'
import { ReviewWhereInput } from './review-where.input'

@ArgsType()
export class UpdateManyReviewArgs {
  @Field(() => ReviewUpdateManyMutationInput, { nullable: false })
  @Type(() => ReviewUpdateManyMutationInput)
  data!: ReviewUpdateManyMutationInput

  @Field(() => ReviewWhereInput, { nullable: true })
  @Type(() => ReviewWhereInput)
  where?: ReviewWhereInput
}
