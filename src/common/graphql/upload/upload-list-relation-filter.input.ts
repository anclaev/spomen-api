import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadWhereInput } from './upload-where.input'

@InputType()
export class UploadListRelationFilter {
  @Field(() => UploadWhereInput, { nullable: true })
  every?: UploadWhereInput

  @Field(() => UploadWhereInput, { nullable: true })
  some?: UploadWhereInput

  @Field(() => UploadWhereInput, { nullable: true })
  none?: UploadWhereInput
}
