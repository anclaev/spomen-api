import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadCreateWithoutEventPicInput } from './upload-create-without-event-pic.input'
import { Type } from 'class-transformer'
import { UploadCreateOrConnectWithoutEventPicInput } from './upload-create-or-connect-without-event-pic.input'
import { Prisma } from '@prisma/client'
import { UploadWhereUniqueInput } from './upload-where-unique.input'

@InputType()
export class UploadCreateNestedOneWithoutEventPicInput {
  @Field(() => UploadCreateWithoutEventPicInput, { nullable: true })
  @Type(() => UploadCreateWithoutEventPicInput)
  create?: UploadCreateWithoutEventPicInput

  @Field(() => UploadCreateOrConnectWithoutEventPicInput, { nullable: true })
  @Type(() => UploadCreateOrConnectWithoutEventPicInput)
  connectOrCreate?: UploadCreateOrConnectWithoutEventPicInput

  @Field(() => UploadWhereUniqueInput, { nullable: true })
  @Type(() => UploadWhereUniqueInput)
  connect?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>
}
