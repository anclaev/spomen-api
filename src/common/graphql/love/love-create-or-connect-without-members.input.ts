import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'
import { Type } from 'class-transformer'
import { LoveCreateWithoutMembersInput } from './love-create-without-members.input'

@InputType()
export class LoveCreateOrConnectWithoutMembersInput {
  @Field(() => LoveWhereUniqueInput, { nullable: false })
  @Type(() => LoveWhereUniqueInput)
  where!: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>

  @Field(() => LoveCreateWithoutMembersInput, { nullable: false })
  @Type(() => LoveCreateWithoutMembersInput)
  create!: LoveCreateWithoutMembersInput
}
