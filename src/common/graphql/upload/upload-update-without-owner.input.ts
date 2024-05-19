import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { UploadUpdateaccessInput } from './upload-updateaccess.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { EventUpdateManyWithoutPicNestedInput } from '../event/event-update-many-without-pic-nested.input'

@InputType()
export class UploadUpdateWithoutOwnerInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: StringFieldUpdateOperationsInput

  @Field(() => UploadUpdateaccessInput, { nullable: true })
  access?: UploadUpdateaccessInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => EventUpdateManyWithoutPicNestedInput, { nullable: true })
  eventPic?: EventUpdateManyWithoutPicNestedInput
}
