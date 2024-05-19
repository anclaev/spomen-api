import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateWithoutEventsOwnerInput } from './account-create-without-events-owner.input'
import { Type } from 'class-transformer'
import { AccountCreateOrConnectWithoutEventsOwnerInput } from './account-create-or-connect-without-events-owner.input'
import { AccountUpsertWithoutEventsOwnerInput } from './account-upsert-without-events-owner.input'
import { Prisma } from '@prisma/client'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { AccountUpdateToOneWithWhereWithoutEventsOwnerInput } from './account-update-to-one-with-where-without-events-owner.input'

@InputType()
export class AccountUpdateOneRequiredWithoutEventsOwnerNestedInput {
  @Field(() => AccountCreateWithoutEventsOwnerInput, { nullable: true })
  @Type(() => AccountCreateWithoutEventsOwnerInput)
  create?: AccountCreateWithoutEventsOwnerInput

  @Field(() => AccountCreateOrConnectWithoutEventsOwnerInput, {
    nullable: true,
  })
  @Type(() => AccountCreateOrConnectWithoutEventsOwnerInput)
  connectOrCreate?: AccountCreateOrConnectWithoutEventsOwnerInput

  @Field(() => AccountUpsertWithoutEventsOwnerInput, { nullable: true })
  @Type(() => AccountUpsertWithoutEventsOwnerInput)
  upsert?: AccountUpsertWithoutEventsOwnerInput

  @Field(() => AccountWhereUniqueInput, { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Prisma.AtLeast<
    AccountWhereUniqueInput,
    'id' | 'login' | 'email' | 'vkId'
  >

  @Field(() => AccountUpdateToOneWithWhereWithoutEventsOwnerInput, {
    nullable: true,
  })
  @Type(() => AccountUpdateToOneWithWhereWithoutEventsOwnerInput)
  update?: AccountUpdateToOneWithWhereWithoutEventsOwnerInput
}
