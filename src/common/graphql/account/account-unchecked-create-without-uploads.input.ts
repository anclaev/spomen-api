import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreaterolesInput } from './account-createroles.input'
import { Sex } from '../prisma/sex.enum'
import { ReviewUncheckedCreateNestedManyWithoutAuthorInput } from '../review/review-unchecked-create-nested-many-without-author.input'
import { OfferUncheckedCreateNestedManyWithoutTargetInput } from '../offer/offer-unchecked-create-nested-many-without-target.input'
import { OfferUncheckedCreateNestedManyWithoutOwnerInput } from '../offer/offer-unchecked-create-nested-many-without-owner.input'
import { EventUncheckedCreateNestedManyWithoutOwnerInput } from '../event/event-unchecked-create-nested-many-without-owner.input'

@InputType()
export class AccountUncheckedCreateWithoutUploadsInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  login!: string

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => String, { nullable: true })
  email?: string

  @Field(() => AccountCreaterolesInput, { nullable: true })
  roles?: AccountCreaterolesInput

  @Field(() => String, { nullable: true })
  vkId?: string

  @Field(() => String, { nullable: true })
  vkPic?: string

  @Field(() => Sex, { nullable: true })
  sex?: keyof typeof Sex

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  surname?: string

  @Field(() => Date, { nullable: true })
  birthday?: Date | string

  @Field(() => String, { nullable: true })
  loveId?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => ReviewUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  reviews?: ReviewUncheckedCreateNestedManyWithoutAuthorInput

  @Field(() => OfferUncheckedCreateNestedManyWithoutTargetInput, {
    nullable: true,
  })
  offers?: OfferUncheckedCreateNestedManyWithoutTargetInput

  @Field(() => OfferUncheckedCreateNestedManyWithoutOwnerInput, {
    nullable: true,
  })
  offerOwner?: OfferUncheckedCreateNestedManyWithoutOwnerInput

  @Field(() => EventUncheckedCreateNestedManyWithoutOwnerInput, {
    nullable: true,
  })
  eventsOwner?: EventUncheckedCreateNestedManyWithoutOwnerInput
}
