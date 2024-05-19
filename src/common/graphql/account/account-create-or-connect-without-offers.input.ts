import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutOffersInput } from './account-create-without-offers.input'

@InputType()
export class AccountCreateOrConnectWithoutOffersInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountCreateWithoutOffersInput, { nullable: false })
  @Type(() => AccountCreateWithoutOffersInput)
  create!: AccountCreateWithoutOffersInput
}
