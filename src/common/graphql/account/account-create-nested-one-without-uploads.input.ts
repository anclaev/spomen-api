import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateWithoutUploadsInput } from './account-create-without-uploads.input'
import { Type } from 'class-transformer'
import { AccountCreateOrConnectWithoutUploadsInput } from './account-create-or-connect-without-uploads.input'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'

@InputType()
export class AccountCreateNestedOneWithoutUploadsInput {
  @Field(() => AccountCreateWithoutUploadsInput, { nullable: true })
  @Type(() => AccountCreateWithoutUploadsInput)
  create?: AccountCreateWithoutUploadsInput

  @Field(() => AccountCreateOrConnectWithoutUploadsInput, { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutUploadsInput)
  connectOrCreate?: AccountCreateOrConnectWithoutUploadsInput

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
