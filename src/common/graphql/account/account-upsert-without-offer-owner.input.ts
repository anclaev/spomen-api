import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountUpdateWithoutOfferOwnerInput } from './account-update-without-offer-owner.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutOfferOwnerInput } from './account-create-without-offer-owner.input'
import { AccountWhereInput } from './account-where.input'

@InputType()
export class AccountUpsertWithoutOfferOwnerInput {
  @Field(() => AccountUpdateWithoutOfferOwnerInput, { nullable: false })
  @Type(() => AccountUpdateWithoutOfferOwnerInput)
  update!: AccountUpdateWithoutOfferOwnerInput

  @Field(() => AccountCreateWithoutOfferOwnerInput, { nullable: false })
  @Type(() => AccountCreateWithoutOfferOwnerInput)
  create!: AccountCreateWithoutOfferOwnerInput

  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput
}
