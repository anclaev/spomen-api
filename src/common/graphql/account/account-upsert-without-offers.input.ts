import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountUpdateWithoutOffersInput } from './account-update-without-offers.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutOffersInput } from './account-create-without-offers.input'
import { AccountWhereInput } from './account-where.input'

@InputType()
export class AccountUpsertWithoutOffersInput {
  @Field(() => AccountUpdateWithoutOffersInput, { nullable: false })
  @Type(() => AccountUpdateWithoutOffersInput)
  update!: AccountUpdateWithoutOffersInput

  @Field(() => AccountCreateWithoutOffersInput, { nullable: false })
  @Type(() => AccountCreateWithoutOffersInput)
  create!: AccountCreateWithoutOffersInput

  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput
}
