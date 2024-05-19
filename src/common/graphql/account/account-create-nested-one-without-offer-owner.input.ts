import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateWithoutOfferOwnerInput } from './account-create-without-offer-owner.input'
import { Type } from 'class-transformer'
import { AccountCreateOrConnectWithoutOfferOwnerInput } from './account-create-or-connect-without-offer-owner.input'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'

@InputType()
export class AccountCreateNestedOneWithoutOfferOwnerInput {
  @Field(() => AccountCreateWithoutOfferOwnerInput, { nullable: true })
  @Type(() => AccountCreateWithoutOfferOwnerInput)
  create?: AccountCreateWithoutOfferOwnerInput

  @Field(() => AccountCreateOrConnectWithoutOfferOwnerInput, { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutOfferOwnerInput)
  connectOrCreate?: AccountCreateOrConnectWithoutOfferOwnerInput

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >
}
