import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutEventsOwnerInput } from './account-create-without-events-owner.input'

@InputType()
export class AccountCreateOrConnectWithoutEventsOwnerInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountCreateWithoutEventsOwnerInput, { nullable: false })
  @Type(() => AccountCreateWithoutEventsOwnerInput)
  create!: AccountCreateWithoutEventsOwnerInput
}
