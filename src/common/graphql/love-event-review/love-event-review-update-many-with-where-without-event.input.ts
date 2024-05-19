import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewScalarWhereInput } from './love-event-review-scalar-where.input'
import { Type } from 'class-transformer'
import { LoveEventReviewUpdateManyMutationInput } from './love-event-review-update-many-mutation.input'

@InputType()
export class LoveEventReviewUpdateManyWithWhereWithoutEventInput {
  @Field(() => LoveEventReviewScalarWhereInput, { nullable: false })
  @Type(() => LoveEventReviewScalarWhereInput)
  where!: LoveEventReviewScalarWhereInput

  @Field(() => LoveEventReviewUpdateManyMutationInput, { nullable: false })
  @Type(() => LoveEventReviewUpdateManyMutationInput)
  data!: LoveEventReviewUpdateManyMutationInput
}
