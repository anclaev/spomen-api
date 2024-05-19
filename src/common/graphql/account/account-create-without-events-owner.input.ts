import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreaterolesInput } from './account-createroles.input'
import { Sex } from '../prisma/sex.enum'
import { LoveCreateNestedOneWithoutMembersInput } from '../love/love-create-nested-one-without-members.input'
import { UploadCreateNestedManyWithoutOwnerInput } from '../upload/upload-create-nested-many-without-owner.input'
import { LoveEventReviewCreateNestedManyWithoutAuthorInput } from '../love-event-review/love-event-review-create-nested-many-without-author.input'

@InputType()
export class AccountCreateWithoutEventsOwnerInput {
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

  @Field(() => LoveEventReviewCreateNestedManyWithoutAuthorInput, {
    nullable: true,
  })
  reviews?: LoveEventReviewCreateNestedManyWithoutAuthorInput
}
