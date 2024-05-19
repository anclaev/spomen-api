import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountUpdateWithoutEventsOwnerInput } from './account-update-without-events-owner.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutEventsOwnerInput } from './account-create-without-events-owner.input'
import { AccountWhereInput } from './account-where.input'

@InputType()
export class AccountUpsertWithoutEventsOwnerInput {
  @Field(() => AccountUpdateWithoutEventsOwnerInput, { nullable: false })
  @Type(() => AccountUpdateWithoutEventsOwnerInput)
  update!: AccountUpdateWithoutEventsOwnerInput

  @Field(() => AccountCreateWithoutEventsOwnerInput, { nullable: false })
  @Type(() => AccountCreateWithoutEventsOwnerInput)
  create!: AccountCreateWithoutEventsOwnerInput

  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput
}
