import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveCreateNestedOneWithoutOfferInput } from '../love/love-create-nested-one-without-offer.input'
import { AccountCreateNestedOneWithoutOfferOwnerInput } from '../account/account-create-nested-one-without-offer-owner.input'
import { AccountCreateNestedOneWithoutOffersInput } from '../account/account-create-nested-one-without-offers.input'

@InputType()
export class OfferCreateInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  code!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => LoveCreateNestedOneWithoutOfferInput, { nullable: false })
  love!: LoveCreateNestedOneWithoutOfferInput

  @Field(() => AccountCreateNestedOneWithoutOfferOwnerInput, {
    nullable: false,
  })
  owner!: AccountCreateNestedOneWithoutOfferOwnerInput

  @Field(() => AccountCreateNestedOneWithoutOffersInput, { nullable: false })
  target!: AccountCreateNestedOneWithoutOffersInput
}
