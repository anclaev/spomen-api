import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewUpdateaccessInput } from './love-event-review-updateaccess.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { AccountUpdateOneRequiredWithoutReviewsNestedInput } from '../account/account-update-one-required-without-reviews-nested.input'

@InputType()
export class LoveEventReviewUpdateWithoutEventInput {
  @Field(() => LoveEventReviewUpdateaccessInput, { nullable: true })
  access?: LoveEventReviewUpdateaccessInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => AccountUpdateOneRequiredWithoutReviewsNestedInput, {
    nullable: true,
  })
  author?: AccountUpdateOneRequiredWithoutReviewsNestedInput
}
