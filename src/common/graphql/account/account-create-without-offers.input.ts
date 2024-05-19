import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreaterolesInput } from './account-createroles.input'
import { Sex } from '../prisma/sex.enum'
import { LoveCreateNestedOneWithoutMembersInput } from '../love/love-create-nested-one-without-members.input'
import { UploadCreateNestedManyWithoutOwnerInput } from '../upload/upload-create-nested-many-without-owner.input'
import { ReviewCreateNestedManyWithoutAuthorInput } from '../review/review-create-nested-many-without-author.input'
import { OfferCreateNestedManyWithoutOwnerInput } from '../offer/offer-create-nested-many-without-owner.input'
import { EventCreateNestedManyWithoutOwnerInput } from '../event/event-create-nested-many-without-owner.input'

@InputType()
export class AccountCreateWithoutOffersInput {
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

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => LoveCreateNestedOneWithoutMembersInput, { nullable: true })
  love?: LoveCreateNestedOneWithoutMembersInput

  @Field(() => UploadCreateNestedManyWithoutOwnerInput, { nullable: true })
  uploads?: UploadCreateNestedManyWithoutOwnerInput

  @Field(() => ReviewCreateNestedManyWithoutAuthorInput, { nullable: true })
  reviews?: ReviewCreateNestedManyWithoutAuthorInput

  @Field(() => OfferCreateNestedManyWithoutOwnerInput, { nullable: true })
  offerOwner?: OfferCreateNestedManyWithoutOwnerInput

  @Field(() => EventCreateNestedManyWithoutOwnerInput, { nullable: true })
  eventsOwner?: EventCreateNestedManyWithoutOwnerInput
}
