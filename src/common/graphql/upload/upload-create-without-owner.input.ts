import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadCreateaccessInput } from './upload-createaccess.input'
import { EventCreateNestedManyWithoutPicInput } from '../event/event-create-nested-many-without-pic.input'

@InputType()
export class UploadCreateWithoutOwnerInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  url!: string

  @Field(() => UploadCreateaccessInput, { nullable: true })
  access?: UploadCreateaccessInput

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => EventCreateNestedManyWithoutPicInput, { nullable: true })
  eventPic?: EventCreateNestedManyWithoutPicInput
}
