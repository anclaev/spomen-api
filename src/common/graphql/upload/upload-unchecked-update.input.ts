import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { UploadUpdateaccessInput } from './upload-updateaccess.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { LoveEventUncheckedUpdateManyWithoutPicNestedInput } from '../love-event/love-event-unchecked-update-many-without-pic-nested.input'

@InputType()
export class UploadUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: StringFieldUpdateOperationsInput

  @Field(() => UploadUpdateaccessInput, { nullable: true })
  access?: UploadUpdateaccessInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  ownerId?: StringFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => LoveEventUncheckedUpdateManyWithoutPicNestedInput, {
    nullable: true,
  })
  eventPic?: LoveEventUncheckedUpdateManyWithoutPicNestedInput
}
