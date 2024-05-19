import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UploadWhereUniqueInput } from './upload-where-unique.input'
import { Type } from 'class-transformer'
import { UploadCreateWithoutOwnerInput } from './upload-create-without-owner.input'

@InputType()
export class UploadCreateOrConnectWithoutOwnerInput {
  @Field(() => UploadWhereUniqueInput, { nullable: false })
  @Type(() => UploadWhereUniqueInput)
  where!: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>

  @Field(() => UploadCreateWithoutOwnerInput, { nullable: false })
  @Type(() => UploadCreateWithoutOwnerInput)
  create!: UploadCreateWithoutOwnerInput
}
