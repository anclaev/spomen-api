import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateWithoutOffersInput } from './account-create-without-offers.input'
import { Type } from 'class-transformer'
import { AccountCreateOrConnectWithoutOffersInput } from './account-create-or-connect-without-offers.input'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'

@InputType()
export class AccountCreateNestedOneWithoutOffersInput {
  @Field(() => AccountCreateWithoutOffersInput, { nullable: true })
  @Type(() => AccountCreateWithoutOffersInput)
  create?: AccountCreateWithoutOffersInput

  @Field(() => AccountCreateOrConnectWithoutOffersInput, { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutOffersInput)
  connectOrCreate?: AccountCreateOrConnectWithoutOffersInput

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
