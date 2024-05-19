import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateWithoutLoveInput } from './account-create-without-love.input'
import { Type } from 'class-transformer'
import { AccountCreateOrConnectWithoutLoveInput } from './account-create-or-connect-without-love.input'
import { AccountUpsertWithWhereUniqueWithoutLoveInput } from './account-upsert-with-where-unique-without-love.input'
import { AccountCreateManyLoveInputEnvelope } from './account-create-many-love-input-envelope.input'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { AccountUpdateWithWhereUniqueWithoutLoveInput } from './account-update-with-where-unique-without-love.input'
import { AccountUpdateManyWithWhereWithoutLoveInput } from './account-update-many-with-where-without-love.input'
import { AccountScalarWhereInput } from './account-scalar-where.input'

@InputType()
export class AccountUncheckedUpdateManyWithoutLoveNestedInput {
  @Field(() => [AccountCreateWithoutLoveInput], { nullable: true })
  @Type(() => AccountCreateWithoutLoveInput)
  create?: Array<AccountCreateWithoutLoveInput>

  @Field(() => [AccountCreateOrConnectWithoutLoveInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutLoveInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutLoveInput>

  @Field(() => [AccountUpsertWithWhereUniqueWithoutLoveInput], {
    nullable: true,
  })
  @Type(() => AccountUpsertWithWhereUniqueWithoutLoveInput)
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutLoveInput>

  @Field(() => AccountCreateManyLoveInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyLoveInputEnvelope)
  createMany?: AccountCreateManyLoveInputEnvelope

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  set?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >

  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<AccountWhereUniqueInput, 'id' | 'login' | 'email' | 'vkId'>
  >

  @Field(() => [AccountUpdateWithWhereUniqueWithoutLoveInput], {
    nullable: true,
  })
  @Type(() => AccountUpdateWithWhereUniqueWithoutLoveInput)
  update?: Array<AccountUpdateWithWhereUniqueWithoutLoveInput>

  @Field(() => [AccountUpdateManyWithWhereWithoutLoveInput], { nullable: true })
  @Type(() => AccountUpdateManyWithWhereWithoutLoveInput)
  updateMany?: Array<AccountUpdateManyWithWhereWithoutLoveInput>

  @Field(() => [AccountScalarWhereInput], { nullable: true })
  @Type(() => AccountScalarWhereInput)
  deleteMany?: Array<AccountScalarWhereInput>
}
