import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadCreateaccessInput } from './upload-createaccess.input'

@InputType()
export class UploadUncheckedCreateWithoutEventPicInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  url!: string

  @Field(() => UploadCreateaccessInput, { nullable: true })
  access?: UploadCreateaccessInput

  @Field(() => String, { nullable: false })
  ownerId!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
