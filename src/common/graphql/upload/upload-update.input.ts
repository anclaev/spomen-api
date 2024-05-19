import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { UploadUpdateaccessInput } from './upload-updateaccess.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'
import { AccountUpdateOneRequiredWithoutUploadsNestedInput } from '../account/account-update-one-required-without-uploads-nested.input'
import { LoveEventUpdateManyWithoutPicNestedInput } from '../love-event/love-event-update-many-without-pic-nested.input'

@InputType()
export class UploadUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  url?: StringFieldUpdateOperationsInput

  @Field(() => UploadUpdateaccessInput, { nullable: true })
  access?: UploadUpdateaccessInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput

  @Field(() => AccountUpdateOneRequiredWithoutUploadsNestedInput, {
    nullable: true,
  })
  owner?: AccountUpdateOneRequiredWithoutUploadsNestedInput

  @Field(() => LoveEventUpdateManyWithoutPicNestedInput, { nullable: true })
  eventPic?: LoveEventUpdateManyWithoutPicNestedInput
}
