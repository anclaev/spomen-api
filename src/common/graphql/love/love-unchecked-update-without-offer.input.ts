import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { AccountUncheckedUpdateManyWithoutLoveNestedInput } from '../account/account-unchecked-update-many-without-love-nested.input'
import { EventUncheckedUpdateManyWithoutLoveNestedInput } from '../event/event-unchecked-update-many-without-love-nested.input'

@InputType()
export class LoveUncheckedUpdateWithoutOfferInput {
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

  @Field(() => AccountUncheckedUpdateManyWithoutLoveNestedInput, {
    nullable: true,
  })
  members?: AccountUncheckedUpdateManyWithoutLoveNestedInput

  @Field(() => EventUncheckedUpdateManyWithoutLoveNestedInput, {
    nullable: true,
  })
  events?: EventUncheckedUpdateManyWithoutLoveNestedInput
}
