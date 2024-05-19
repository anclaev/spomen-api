import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadCreateNestedOneWithoutEventPicInput } from '../upload/upload-create-nested-one-without-event-pic.input'
import { LoveCreateNestedOneWithoutEventsInput } from '../love/love-create-nested-one-without-events.input'
import { LoveEventReviewCreateNestedManyWithoutEventInput } from '../love-event-review/love-event-review-create-nested-many-without-event.input'

@InputType()
export class LoveEventCreateWithoutOwnerInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => Date, { nullable: true })
  date?: Date | string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => UploadCreateNestedOneWithoutEventPicInput, { nullable: false })
  pic!: UploadCreateNestedOneWithoutEventPicInput

  @Field(() => LoveCreateNestedOneWithoutEventsInput, { nullable: false })
  love!: LoveCreateNestedOneWithoutEventsInput

  @Field(() => LoveEventReviewCreateNestedManyWithoutEventInput, {
    nullable: true,
  })
  reviews?: LoveEventReviewCreateNestedManyWithoutEventInput
}
