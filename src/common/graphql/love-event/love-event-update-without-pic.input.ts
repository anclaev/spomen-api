import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { LoveUpdateOneRequiredWithoutEventsNestedInput } from '../love/love-update-one-required-without-events-nested.input'
import { AccountUpdateOneRequiredWithoutEventsOwnerNestedInput } from '../account/account-update-one-required-without-events-owner-nested.input'
import { LoveEventReviewUpdateManyWithoutEventNestedInput } from '../love-event-review/love-event-review-update-many-without-event-nested.input'

@InputType()
export class LoveEventUpdateWithoutPicInput {
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

  @Field(() => LoveUpdateOneRequiredWithoutEventsNestedInput, {
    nullable: true,
  })
  love?: LoveUpdateOneRequiredWithoutEventsNestedInput

  @Field(() => AccountUpdateOneRequiredWithoutEventsOwnerNestedInput, {
    nullable: true,
  })
  owner?: AccountUpdateOneRequiredWithoutEventsOwnerNestedInput

  @Field(() => LoveEventReviewUpdateManyWithoutEventNestedInput, {
    nullable: true,
  })
  reviews?: LoveEventReviewUpdateManyWithoutEventNestedInput
}
