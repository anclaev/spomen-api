import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadCreateManyOwnerInput } from './upload-create-many-owner.input'
import { Type } from 'class-transformer'

@InputType()
export class UploadCreateManyOwnerInputEnvelope {
  @Field(() => [UploadCreateManyOwnerInput], { nullable: false })
  @Type(() => UploadCreateManyOwnerInput)
  data!: Array<UploadCreateManyOwnerInput>
}
