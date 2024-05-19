import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadCreateWithoutOwnerInput } from './upload-create-without-owner.input'
import { Type } from 'class-transformer'
import { UploadCreateOrConnectWithoutOwnerInput } from './upload-create-or-connect-without-owner.input'
import { UploadUpsertWithWhereUniqueWithoutOwnerInput } from './upload-upsert-with-where-unique-without-owner.input'
import { UploadCreateManyOwnerInputEnvelope } from './upload-create-many-owner-input-envelope.input'
import { Prisma } from '@prisma/client'
import { UploadWhereUniqueInput } from './upload-where-unique.input'
import { UploadUpdateWithWhereUniqueWithoutOwnerInput } from './upload-update-with-where-unique-without-owner.input'
import { UploadUpdateManyWithWhereWithoutOwnerInput } from './upload-update-many-with-where-without-owner.input'
import { UploadScalarWhereInput } from './upload-scalar-where.input'

@InputType()
export class UploadUpdateManyWithoutOwnerNestedInput {
  @Field(() => [UploadCreateWithoutOwnerInput], { nullable: true })
  @Type(() => UploadCreateWithoutOwnerInput)
  create?: Array<UploadCreateWithoutOwnerInput>

  @Field(() => [UploadCreateOrConnectWithoutOwnerInput], { nullable: true })
  @Type(() => UploadCreateOrConnectWithoutOwnerInput)
  connectOrCreate?: Array<UploadCreateOrConnectWithoutOwnerInput>

  @Field(() => [UploadUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  @Type(() => UploadUpsertWithWhereUniqueWithoutOwnerInput)
  upsert?: Array<UploadUpsertWithWhereUniqueWithoutOwnerInput>

  @Field(() => UploadCreateManyOwnerInputEnvelope, { nullable: true })
  @Type(() => UploadCreateManyOwnerInputEnvelope)
  createMany?: UploadCreateManyOwnerInputEnvelope

  @Field(() => [UploadWhereUniqueInput], { nullable: true })
  @Type(() => UploadWhereUniqueInput)
  set?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>

  @Field(() => [UploadWhereUniqueInput], { nullable: true })
  @Type(() => UploadWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>

  @Field(() => [UploadWhereUniqueInput], { nullable: true })
  @Type(() => UploadWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>

  @Field(() => [UploadWhereUniqueInput], { nullable: true })
  @Type(() => UploadWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>

  @Field(() => [UploadUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
  })
  @Type(() => UploadUpdateWithWhereUniqueWithoutOwnerInput)
  update?: Array<UploadUpdateWithWhereUniqueWithoutOwnerInput>

  @Field(() => [UploadUpdateManyWithWhereWithoutOwnerInput], { nullable: true })
  @Type(() => UploadUpdateManyWithWhereWithoutOwnerInput)
  updateMany?: Array<UploadUpdateManyWithWhereWithoutOwnerInput>

  @Field(() => [UploadScalarWhereInput], { nullable: true })
  @Type(() => UploadScalarWhereInput)
  deleteMany?: Array<UploadScalarWhereInput>
}
