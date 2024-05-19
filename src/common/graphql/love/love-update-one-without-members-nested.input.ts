import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveCreateWithoutMembersInput } from './love-create-without-members.input'
import { Type } from 'class-transformer'
import { LoveCreateOrConnectWithoutMembersInput } from './love-create-or-connect-without-members.input'
import { LoveUpsertWithoutMembersInput } from './love-upsert-without-members.input'
import { LoveWhereInput } from './love-where.input'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'
import { LoveUpdateToOneWithWhereWithoutMembersInput } from './love-update-to-one-with-where-without-members.input'

@InputType()
export class LoveUpdateOneWithoutMembersNestedInput {
  @Field(() => LoveCreateWithoutMembersInput, { nullable: true })
  @Type(() => LoveCreateWithoutMembersInput)
  create?: LoveCreateWithoutMembersInput

  @Field(() => LoveCreateOrConnectWithoutMembersInput, { nullable: true })
  @Type(() => LoveCreateOrConnectWithoutMembersInput)
  connectOrCreate?: LoveCreateOrConnectWithoutMembersInput

  @Field(() => LoveUpsertWithoutMembersInput, { nullable: true })
  @Type(() => LoveUpsertWithoutMembersInput)
  upsert?: LoveUpsertWithoutMembersInput

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean

  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  delete?: LoveWhereInput

  @Field(() => LoveWhereUniqueInput, { nullable: true })
  @Type(() => LoveWhereUniqueInput)
  connect?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>

  @Field(() => LoveUpdateToOneWithWhereWithoutMembersInput, { nullable: true })
  @Type(() => LoveUpdateToOneWithWhereWithoutMembersInput)
  update?: LoveUpdateToOneWithWhereWithoutMembersInput
}
