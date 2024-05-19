import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadScalarWhereInput } from './upload-scalar-where.input'
import { Type } from 'class-transformer'
import { UploadUpdateManyMutationInput } from './upload-update-many-mutation.input'

@InputType()
export class UploadUpdateManyWithWhereWithoutOwnerInput {
  @Field(() => UploadScalarWhereInput, { nullable: false })
  @Type(() => UploadScalarWhereInput)
  where!: UploadScalarWhereInput

  @Field(() => UploadUpdateManyMutationInput, { nullable: false })
  @Type(() => UploadUpdateManyMutationInput)
  data!: UploadUpdateManyMutationInput
}
