import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewUncheckedCreateNestedManyWithoutEventInput } from '../love-event-review/love-event-review-unchecked-create-nested-many-without-event.input'

@InputType()
export class LoveEventUncheckedCreateWithoutOwnerInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => Date, { nullable: true })
  date?: Date | string

  @Field(() => String, { nullable: false })
  picId!: string

  @Field(() => String, { nullable: false })
  loveId!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => LoveEventReviewUncheckedCreateNestedManyWithoutEventInput, {
    nullable: true,
  })
  reviews?: LoveEventReviewUncheckedCreateNestedManyWithoutEventInput
}
