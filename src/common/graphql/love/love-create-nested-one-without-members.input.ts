import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveCreateWithoutMembersInput } from './love-create-without-members.input'
import { Type } from 'class-transformer'
import { LoveCreateOrConnectWithoutMembersInput } from './love-create-or-connect-without-members.input'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'

@InputType()
export class LoveCreateNestedOneWithoutMembersInput {
  @Field(() => LoveCreateWithoutMembersInput, { nullable: true })
  @Type(() => LoveCreateWithoutMembersInput)
  create?: LoveCreateWithoutMembersInput

  @Field(() => LoveCreateOrConnectWithoutMembersInput, { nullable: true })
  @Type(() => LoveCreateOrConnectWithoutMembersInput)
  connectOrCreate?: LoveCreateOrConnectWithoutMembersInput

  @Field(() => LoveWhereUniqueInput, { nullable: true })
  @Type(() => LoveWhereUniqueInput)
  connect?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
}
