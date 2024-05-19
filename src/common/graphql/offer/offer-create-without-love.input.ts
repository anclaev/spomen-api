import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateNestedOneWithoutOfferOwnerInput } from '../account/account-create-nested-one-without-offer-owner.input'
import { AccountCreateNestedOneWithoutOffersInput } from '../account/account-create-nested-one-without-offers.input'

@InputType()
export class OfferCreateWithoutLoveInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  code!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => AccountCreateNestedOneWithoutOfferOwnerInput, {
    nullable: false,
  })
  owner!: AccountCreateNestedOneWithoutOfferOwnerInput

  @Field(() => AccountCreateNestedOneWithoutOffersInput, { nullable: false })
  target!: AccountCreateNestedOneWithoutOffersInput
}
