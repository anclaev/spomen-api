import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutOfferOwnerInput } from './account-create-without-offer-owner.input'

@InputType()
export class AccountCreateOrConnectWithoutOfferOwnerInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountCreateWithoutOfferOwnerInput, { nullable: false })
  @Type(() => AccountCreateWithoutOfferOwnerInput)
  create!: AccountCreateWithoutOfferOwnerInput
}
