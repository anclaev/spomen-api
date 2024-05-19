import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewUpdateaccessInput } from './review-updateaccess.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { AccountUpdateOneRequiredWithoutReviewsNestedInput } from '../account/account-update-one-required-without-reviews-nested.input'
import { EventUpdateOneRequiredWithoutReviewsNestedInput } from '../event/event-update-one-required-without-reviews-nested.input'

@InputType()
export class ReviewUpdateInput {
  @Field(() => ReviewUpdateaccessInput, { nullable: true })
  access?: ReviewUpdateaccessInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => AccountUpdateOneRequiredWithoutReviewsNestedInput, {
    nullable: true,
  })
  author?: AccountUpdateOneRequiredWithoutReviewsNestedInput

  @Field(() => EventUpdateOneRequiredWithoutReviewsNestedInput, {
    nullable: true,
  })
  event?: EventUpdateOneRequiredWithoutReviewsNestedInput
}
