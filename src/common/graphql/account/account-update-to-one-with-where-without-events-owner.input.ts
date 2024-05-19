import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountWhereInput } from './account-where.input'
import { Type } from 'class-transformer'
import { AccountUpdateWithoutEventsOwnerInput } from './account-update-without-events-owner.input'

@InputType()
export class AccountUpdateToOneWithWhereWithoutEventsOwnerInput {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput

  @Field(() => AccountUpdateWithoutEventsOwnerInput, { nullable: false })
  @Type(() => AccountUpdateWithoutEventsOwnerInput)
  data!: AccountUpdateWithoutEventsOwnerInput
}
