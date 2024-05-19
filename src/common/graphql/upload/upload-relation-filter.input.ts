import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadWhereInput } from './upload-where.input'

@InputType()
export class UploadRelationFilter {
  @Field(() => UploadWhereInput, { nullable: true })
  is?: UploadWhereInput

  @Field(() => UploadWhereInput, { nullable: true })
  isNot?: UploadWhereInput
}
