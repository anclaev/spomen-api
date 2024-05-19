import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewUpdateaccessInput } from './review-updateaccess.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'

@InputType()
export class ReviewUncheckedUpdateManyWithoutAuthorInput {
  @Field(() => ReviewUpdateaccessInput, { nullable: true })
  access?: ReviewUpdateaccessInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  eventId?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput
}
