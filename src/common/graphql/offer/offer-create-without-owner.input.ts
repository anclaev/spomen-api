import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveCreateNestedOneWithoutOfferInput } from '../love/love-create-nested-one-without-offer.input'
import { AccountCreateNestedOneWithoutOffersInput } from '../account/account-create-nested-one-without-offers.input'

@InputType()
export class OfferCreateWithoutOwnerInput {
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

  @Field(() => AccountCreateNestedOneWithoutOffersInput, { nullable: false })
  target!: AccountCreateNestedOneWithoutOffersInput
}
