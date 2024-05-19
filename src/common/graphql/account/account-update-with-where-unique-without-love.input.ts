import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountUpdateWithoutLoveInput } from './account-update-without-love.input'

@InputType()
export class AccountUpdateWithWhereUniqueWithoutLoveInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountUpdateWithoutLoveInput, { nullable: false })
  @Type(() => AccountUpdateWithoutLoveInput)
  data!: AccountUpdateWithoutLoveInput
}
