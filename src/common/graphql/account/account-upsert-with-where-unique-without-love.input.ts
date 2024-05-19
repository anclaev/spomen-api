import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountUpdateWithoutLoveInput } from './account-update-without-love.input'
import { AccountCreateWithoutLoveInput } from './account-create-without-love.input'

@InputType()
export class AccountUpsertWithWhereUniqueWithoutLoveInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountUpdateWithoutLoveInput, { nullable: false })
  @Type(() => AccountUpdateWithoutLoveInput)
  update!: AccountUpdateWithoutLoveInput

  @Field(() => AccountCreateWithoutLoveInput, { nullable: false })
  @Type(() => AccountCreateWithoutLoveInput)
  create!: AccountCreateWithoutLoveInput
}
