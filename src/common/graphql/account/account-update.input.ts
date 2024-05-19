import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { AccountUpdaterolesInput } from './account-updateroles.input'
import { NullableEnumSexFieldUpdateOperationsInput } from '../prisma/nullable-enum-sex-field-update-operations.input'
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { LoveUpdateOneWithoutMembersNestedInput } from '../love/love-update-one-without-members-nested.input'
import { UploadUpdateManyWithoutOwnerNestedInput } from '../upload/upload-update-many-without-owner-nested.input'
import { ReviewUpdateManyWithoutAuthorNestedInput } from '../review/review-update-many-without-author-nested.input'
import { OfferUpdateManyWithoutTargetNestedInput } from '../offer/offer-update-many-without-target-nested.input'
import { OfferUpdateManyWithoutOwnerNestedInput } from '../offer/offer-update-many-without-owner-nested.input'
import { EventUpdateManyWithoutOwnerNestedInput } from '../event/event-update-many-without-owner-nested.input'

@InputType()
export class AccountUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  login?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  email?: NullableStringFieldUpdateOperationsInput

  @Field(() => AccountUpdaterolesInput, { nullable: true })
  roles?: AccountUpdaterolesInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  vkId?: NullableStringFieldUpdateOperationsInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  vkPic?: NullableStringFieldUpdateOperationsInput

  @Field(() => NullableEnumSexFieldUpdateOperationsInput, { nullable: true })
  sex?: NullableEnumSexFieldUpdateOperationsInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: NullableStringFieldUpdateOperationsInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  surname?: NullableStringFieldUpdateOperationsInput

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  birthday?: NullableDateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => LoveUpdateOneWithoutMembersNestedInput, { nullable: true })
  love?: LoveUpdateOneWithoutMembersNestedInput

  @Field(() => UploadUpdateManyWithoutOwnerNestedInput, { nullable: true })
  uploads?: UploadUpdateManyWithoutOwnerNestedInput

  @Field(() => ReviewUpdateManyWithoutAuthorNestedInput, { nullable: true })
  reviews?: ReviewUpdateManyWithoutAuthorNestedInput

  @Field(() => OfferUpdateManyWithoutTargetNestedInput, { nullable: true })
  offers?: OfferUpdateManyWithoutTargetNestedInput

  @Field(() => OfferUpdateManyWithoutOwnerNestedInput, { nullable: true })
  offerOwner?: OfferUpdateManyWithoutOwnerNestedInput

  @Field(() => EventUpdateManyWithoutOwnerNestedInput, { nullable: true })
  eventsOwner?: EventUpdateManyWithoutOwnerNestedInput
}
