import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountWhereInput } from './account-where.input'
import { Type } from 'class-transformer'
import { AccountUpdateWithoutOffersInput } from './account-update-without-offers.input'

@InputType()
export class AccountUpdateToOneWithWhereWithoutOffersInput {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput

  @Field(() => AccountUpdateWithoutOffersInput, { nullable: false })
  @Type(() => AccountUpdateWithoutOffersInput)
  data!: AccountUpdateWithoutOffersInput
}
