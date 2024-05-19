import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewUpdateaccessInput } from './review-updateaccess.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'

@InputType()
export class ReviewUpdateManyMutationInput {
  @Field(() => ReviewUpdateaccessInput, { nullable: true })
  access?: ReviewUpdateaccessInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput
}
