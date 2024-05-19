import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadUpdateWithoutEventPicInput } from './upload-update-without-event-pic.input'
import { Type } from 'class-transformer'
import { UploadCreateWithoutEventPicInput } from './upload-create-without-event-pic.input'
import { UploadWhereInput } from './upload-where.input'

@InputType()
export class UploadUpsertWithoutEventPicInput {
  @Field(() => UploadUpdateWithoutEventPicInput, { nullable: false })
  @Type(() => UploadUpdateWithoutEventPicInput)
  update!: UploadUpdateWithoutEventPicInput

  @Field(() => UploadCreateWithoutEventPicInput, { nullable: false })
  @Type(() => UploadCreateWithoutEventPicInput)
  create!: UploadCreateWithoutEventPicInput

  @Field(() => UploadWhereInput, { nullable: true })
  @Type(() => UploadWhereInput)
  where?: UploadWhereInput
}
