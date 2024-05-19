import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreaterolesInput } from './account-createroles.input'
import { Sex } from '../prisma/sex.enum'
import { LoveEventReviewUncheckedCreateNestedManyWithoutAuthorInput } from '../love-event-review/love-event-review-unchecked-create-nested-many-without-author.input'
import { LoveEventUncheckedCreateNestedManyWithoutOwnerInput } from '../love-event/love-event-unchecked-create-nested-many-without-owner.input'

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

  @Field(() => LoveEventReviewUncheckedCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  reviews?: LoveEventReviewUncheckedCreateNestedManyWithoutAuthorInput

  @Field(() => LoveEventUncheckedCreateNestedManyWithoutOwnerInput, {
    nullable: true,
  })
  eventsOwner?: LoveEventUncheckedCreateNestedManyWithoutOwnerInput
}
