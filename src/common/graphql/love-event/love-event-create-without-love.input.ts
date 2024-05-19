import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadCreateNestedOneWithoutEventPicInput } from '../upload/upload-create-nested-one-without-event-pic.input'
import { AccountCreateNestedOneWithoutEventsOwnerInput } from '../account/account-create-nested-one-without-events-owner.input'
import { LoveEventReviewCreateNestedManyWithoutEventInput } from '../love-event-review/love-event-review-create-nested-many-without-event.input'

@InputType()
export class LoveEventCreateWithoutLoveInput {
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

  @Field(() => AccountCreateNestedOneWithoutEventsOwnerInput, {
    nullable: false,
  })
  owner!: AccountCreateNestedOneWithoutEventsOwnerInput

  @Field(() => LoveEventReviewCreateNestedManyWithoutEventInput, {
    nullable: true,
  })
  reviews?: LoveEventReviewCreateNestedManyWithoutEventInput
}
