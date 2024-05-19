import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { UploadUpdateOneRequiredWithoutEventPicNestedInput } from '../upload/upload-update-one-required-without-event-pic-nested.input'
import { LoveUpdateOneRequiredWithoutEventsNestedInput } from '../love/love-update-one-required-without-events-nested.input'
import { AccountUpdateOneRequiredWithoutEventsOwnerNestedInput } from '../account/account-update-one-required-without-events-owner-nested.input'

@InputType()
export class EventUpdateWithoutReviewsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date?: NullableDateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => UploadUpdateOneRequiredWithoutEventPicNestedInput, {
    nullable: true,
  })
  pic?: UploadUpdateOneRequiredWithoutEventPicNestedInput

  @Field(() => LoveUpdateOneRequiredWithoutEventsNestedInput, {
    nullable: true,
  })
  love?: LoveUpdateOneRequiredWithoutEventsNestedInput

  @Field(() => AccountUpdateOneRequiredWithoutEventsOwnerNestedInput, {
    nullable: true,
  })
  owner?: AccountUpdateOneRequiredWithoutEventsOwnerNestedInput
}
