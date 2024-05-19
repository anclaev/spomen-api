import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutLoveInput } from './account-create-without-love.input'

@InputType()
export class AccountCreateOrConnectWithoutLoveInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountCreateWithoutLoveInput, { nullable: false })
  @Type(() => AccountCreateWithoutLoveInput)
  create!: AccountCreateWithoutLoveInput
}
