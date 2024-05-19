import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UploadWhereUniqueInput } from './upload-where-unique.input'
import { Type } from 'class-transformer'
import { UploadUpdateWithoutOwnerInput } from './upload-update-without-owner.input'

@InputType()
export class UploadUpdateWithWhereUniqueWithoutOwnerInput {
  @Field(() => UploadWhereUniqueInput, { nullable: false })
  @Type(() => UploadWhereUniqueInput)
  where!: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>

  @Field(() => UploadUpdateWithoutOwnerInput, { nullable: false })
  @Type(() => UploadUpdateWithoutOwnerInput)
  data!: UploadUpdateWithoutOwnerInput
}
