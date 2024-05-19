import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadWhereInput } from './upload-where.input'
import { Type } from 'class-transformer'
import { UploadUpdateWithoutEventPicInput } from './upload-update-without-event-pic.input'

@InputType()
export class UploadUpdateToOneWithWhereWithoutEventPicInput {
  @Field(() => UploadWhereInput, { nullable: true })
  @Type(() => UploadWhereInput)
  where?: UploadWhereInput

  @Field(() => UploadUpdateWithoutEventPicInput, { nullable: false })
  @Type(() => UploadUpdateWithoutEventPicInput)
  data!: UploadUpdateWithoutEventPicInput
}
