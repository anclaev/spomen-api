import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateWithoutLoveInput } from './account-create-without-love.input'
import { Type } from 'class-transformer'
import { AccountCreateOrConnectWithoutLoveInput } from './account-create-or-connect-without-love.input'
import { AccountCreateManyLoveInputEnvelope } from './account-create-many-love-input-envelope.input'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'

@InputType()
export class AccountUncheckedCreateNestedManyWithoutLoveInput {
  @Field(() => [AccountCreateWithoutLoveInput], { nullable: true })
  @Type(() => AccountCreateWithoutLoveInput)
  create?: Array<AccountCreateWithoutLoveInput>

  @Field(() => [AccountCreateOrConnectWithoutLoveInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutLoveInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutLoveInput>

  @Field(() => AccountCreateManyLoveInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyLoveInputEnvelope)
  createMany?: AccountCreateManyLoveInputEnvelope

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >
}
