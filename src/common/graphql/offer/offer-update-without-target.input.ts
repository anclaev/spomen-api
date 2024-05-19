import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { LoveUpdateOneRequiredWithoutOfferNestedInput } from '../love/love-update-one-required-without-offer-nested.input'
import { AccountUpdateOneRequiredWithoutOfferOwnerNestedInput } from '../account/account-update-one-required-without-offer-owner-nested.input'

@InputType()
export class OfferUpdateWithoutTargetInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  code?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => LoveUpdateOneRequiredWithoutOfferNestedInput, { nullable: true })
  love?: LoveUpdateOneRequiredWithoutOfferNestedInput

  @Field(() => AccountUpdateOneRequiredWithoutOfferOwnerNestedInput, {
    nullable: true,
  })
  owner?: AccountUpdateOneRequiredWithoutOfferOwnerNestedInput
}
