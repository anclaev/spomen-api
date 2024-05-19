import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { AccountUpdaterolesInput } from './account-updateroles.input'
import { NullableEnumSexFieldUpdateOperationsInput } from '../prisma/nullable-enum-sex-field-update-operations.input'
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UploadUncheckedUpdateManyWithoutOwnerNestedInput } from '../upload/upload-unchecked-update-many-without-owner-nested.input'
import { LoveEventUncheckedUpdateManyWithoutOwnerNestedInput } from '../love-event/love-event-unchecked-update-many-without-owner-nested.input'

@InputType()
export class AccountUncheckedUpdateWithoutReviewsInput {
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

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  loveId?: NullableStringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UploadUncheckedUpdateManyWithoutOwnerNestedInput, {
    nullable: true,
  })
  uploads?: UploadUncheckedUpdateManyWithoutOwnerNestedInput

  @Field(() => LoveEventUncheckedUpdateManyWithoutOwnerNestedInput, {
    nullable: true,
  })
  eventsOwner?: LoveEventUncheckedUpdateManyWithoutOwnerNestedInput
}
