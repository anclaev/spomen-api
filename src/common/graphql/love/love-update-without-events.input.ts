import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { AccountUpdateManyWithoutLoveNestedInput } from '../account/account-update-many-without-love-nested.input'
import { OfferUpdateManyWithoutLoveNestedInput } from '../offer/offer-update-many-without-love-nested.input'

@InputType()
export class LoveUpdateWithoutEventsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  alias?: StringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  private?: BoolFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => AccountUpdateManyWithoutLoveNestedInput, { nullable: true })
  members?: AccountUpdateManyWithoutLoveNestedInput

  @Field(() => OfferUpdateManyWithoutLoveNestedInput, { nullable: true })
  Offer?: OfferUpdateManyWithoutLoveNestedInput
}
