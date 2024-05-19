import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UploadCreateManyInput } from './upload-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyUploadArgs {
  @Field(() => [UploadCreateManyInput], { nullable: false })
  @Type(() => UploadCreateManyInput)
  data!: Array<UploadCreateManyInput>
}
