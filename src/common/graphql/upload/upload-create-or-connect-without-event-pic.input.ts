import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { UploadWhereUniqueInput } from './upload-where-unique.input'
import { Type } from 'class-transformer'
import { UploadCreateWithoutEventPicInput } from './upload-create-without-event-pic.input'

@InputType()
export class UploadCreateOrConnectWithoutEventPicInput {
  @Field(() => UploadWhereUniqueInput, { nullable: false })
  @Type(() => UploadWhereUniqueInput)
  where!: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>

  @Field(() => UploadCreateWithoutEventPicInput, { nullable: false })
  @Type(() => UploadCreateWithoutEventPicInput)
  create!: UploadCreateWithoutEventPicInput
}
