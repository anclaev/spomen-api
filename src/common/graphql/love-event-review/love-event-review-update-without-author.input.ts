import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewUpdateaccessInput } from './love-event-review-updateaccess.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { LoveEventUpdateOneRequiredWithoutReviewsNestedInput } from '../love-event/love-event-update-one-required-without-reviews-nested.input'

@InputType()
export class LoveEventReviewUpdateWithoutAuthorInput {
  @Field(() => LoveEventReviewUpdateaccessInput, { nullable: true })
  access?: LoveEventReviewUpdateaccessInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => LoveEventUpdateOneRequiredWithoutReviewsNestedInput, {
    nullable: true,
  })
  event?: LoveEventUpdateOneRequiredWithoutReviewsNestedInput
}
