import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountWhereInput } from './account-where.input'
import { Type } from 'class-transformer'
import { AccountUpdateWithoutOfferOwnerInput } from './account-update-without-offer-owner.input'

@InputType()
export class AccountUpdateToOneWithWhereWithoutOfferOwnerInput {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput

  @Field(() => AccountUpdateWithoutOfferOwnerInput, { nullable: false })
  @Type(() => AccountUpdateWithoutOfferOwnerInput)
  data!: AccountUpdateWithoutOfferOwnerInput
}
