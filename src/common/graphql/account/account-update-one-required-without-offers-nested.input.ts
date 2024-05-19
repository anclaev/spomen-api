import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateWithoutOffersInput } from './account-create-without-offers.input'
import { Type } from 'class-transformer'
import { AccountCreateOrConnectWithoutOffersInput } from './account-create-or-connect-without-offers.input'
import { AccountUpsertWithoutOffersInput } from './account-upsert-without-offers.input'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { AccountUpdateToOneWithWhereWithoutOffersInput } from './account-update-to-one-with-where-without-offers.input'

@InputType()
export class AccountUpdateOneRequiredWithoutOffersNestedInput {
  @Field(() => AccountCreateWithoutOffersInput, { nullable: true })
  @Type(() => AccountCreateWithoutOffersInput)
  create?: AccountCreateWithoutOffersInput

  @Field(() => AccountCreateOrConnectWithoutOffersInput, { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutOffersInput)
  connectOrCreate?: AccountCreateOrConnectWithoutOffersInput

  @Field(() => AccountUpsertWithoutOffersInput, { nullable: true })
  @Type(() => AccountUpsertWithoutOffersInput)
  upsert?: AccountUpsertWithoutOffersInput

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountUpdateToOneWithWhereWithoutOffersInput, {
    nullable: true,
  })
  @Type(() => AccountUpdateToOneWithWhereWithoutOffersInput)
  update?: AccountUpdateToOneWithWhereWithoutOffersInput
}
