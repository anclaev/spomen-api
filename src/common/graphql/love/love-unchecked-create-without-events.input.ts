import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountUncheckedCreateNestedManyWithoutLoveInput } from '../account/account-unchecked-create-nested-many-without-love.input'
import { OfferUncheckedCreateNestedManyWithoutLoveInput } from '../offer/offer-unchecked-create-nested-many-without-love.input'

@InputType()
export class LoveUncheckedCreateWithoutEventsInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  alias!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => Boolean, { nullable: false })
  private!: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => AccountUncheckedCreateNestedManyWithoutLoveInput, {
    nullable: true,
  })
  members?: AccountUncheckedCreateNestedManyWithoutLoveInput

  @Field(() => OfferUncheckedCreateNestedManyWithoutLoveInput, {
    nullable: true,
  })
  Offer?: OfferUncheckedCreateNestedManyWithoutLoveInput
}
