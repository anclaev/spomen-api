import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadCreateWithoutEventPicInput } from './upload-create-without-event-pic.input'
import { Type } from 'class-transformer'
import { UploadCreateOrConnectWithoutEventPicInput } from './upload-create-or-connect-without-event-pic.input'
import { UploadUpsertWithoutEventPicInput } from './upload-upsert-without-event-pic.input'
import { Prisma } from '@prisma/client'
import { UploadWhereUniqueInput } from './upload-where-unique.input'
import { UploadUpdateToOneWithWhereWithoutEventPicInput } from './upload-update-to-one-with-where-without-event-pic.input'

@InputType()
export class UploadUpdateOneRequiredWithoutEventPicNestedInput {
  @Field(() => UploadCreateWithoutEventPicInput, { nullable: true })
  @Type(() => UploadCreateWithoutEventPicInput)
  create?: UploadCreateWithoutEventPicInput

  @Field(() => UploadCreateOrConnectWithoutEventPicInput, { nullable: true })
  @Type(() => UploadCreateOrConnectWithoutEventPicInput)
  connectOrCreate?: UploadCreateOrConnectWithoutEventPicInput

  @Field(() => UploadUpsertWithoutEventPicInput, { nullable: true })
  @Type(() => UploadUpsertWithoutEventPicInput)
  upsert?: UploadUpsertWithoutEventPicInput

  @Field(() => UploadWhereUniqueInput, { nullable: true })
  @Type(() => UploadWhereUniqueInput)
  connect?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>

  @Field(() => UploadUpdateToOneWithWhereWithoutEventPicInput, {
    nullable: true,
  })
  @Type(() => UploadUpdateToOneWithWhereWithoutEventPicInput)
  update?: UploadUpdateToOneWithWhereWithoutEventPicInput
}
