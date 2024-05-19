import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadCreateWithoutOwnerInput } from './upload-create-without-owner.input'
import { Type } from 'class-transformer'
import { UploadCreateOrConnectWithoutOwnerInput } from './upload-create-or-connect-without-owner.input'
import { UploadCreateManyOwnerInputEnvelope } from './upload-create-many-owner-input-envelope.input'
import { Prisma } from '@prisma/client'
import { UploadWhereUniqueInput } from './upload-where-unique.input'

@InputType()
export class UploadUncheckedCreateNestedManyWithoutOwnerInput {
  @Field(() => [UploadCreateWithoutOwnerInput], { nullable: true })
  @Type(() => UploadCreateWithoutOwnerInput)
  create?: Array<UploadCreateWithoutOwnerInput>

  @Field(() => [UploadCreateOrConnectWithoutOwnerInput], { nullable: true })
  @Type(() => UploadCreateOrConnectWithoutOwnerInput)
  connectOrCreate?: Array<UploadCreateOrConnectWithoutOwnerInput>

  @Field(() => UploadCreateManyOwnerInputEnvelope, { nullable: true })
  @Type(() => UploadCreateManyOwnerInputEnvelope)
  createMany?: UploadCreateManyOwnerInputEnvelope

  @Field(() => [UploadWhereUniqueInput], { nullable: true })
  @Type(() => UploadWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<UploadWhereUniqueInput, 'id'>>
}
