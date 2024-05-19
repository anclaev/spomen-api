import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventReviewUpdateManyMutationInput } from './love-event-review-update-many-mutation.input'
import { Type } from 'class-transformer'
import { LoveEventReviewWhereInput } from './love-event-review-where.input'

@ArgsType()
export class UpdateManyLoveEventReviewArgs {
  @Field(() => LoveEventReviewUpdateManyMutationInput, { nullable: false })
  @Type(() => LoveEventReviewUpdateManyMutationInput)
  data!: LoveEventReviewUpdateManyMutationInput

  @Field(() => LoveEventReviewWhereInput, { nullable: true })
  @Type(() => LoveEventReviewWhereInput)
  where?: LoveEventReviewWhereInput
}
