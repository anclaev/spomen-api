import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UploadWhereUniqueInput } from './upload-where-unique.input'
import { Type } from 'class-transformer'
import { UploadUpdateWithoutOwnerInput } from './upload-update-without-owner.input'
import { UploadCreateWithoutOwnerInput } from './upload-create-without-owner.input'

@InputType()
export class UploadUpsertWithWhereUniqueWithoutOwnerInput {
  @Field(() => UploadWhereUniqueInput, { nullable: false })
  @Type(() => UploadWhereUniqueInput)
  where!: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>

  @Field(() => UploadUpdateWithoutOwnerInput, { nullable: false })
  @Type(() => UploadUpdateWithoutOwnerInput)
  update!: UploadUpdateWithoutOwnerInput

  @Field(() => UploadCreateWithoutOwnerInput, { nullable: false })
  @Type(() => UploadCreateWithoutOwnerInput)
  create!: UploadCreateWithoutOwnerInput
}
