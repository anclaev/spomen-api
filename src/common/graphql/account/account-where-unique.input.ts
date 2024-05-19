import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountWhereInput } from './account-where.input'
import { StringFilter } from '../prisma/string-filter.input'
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { EnumSexNullableFilter } from '../prisma/enum-sex-nullable-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { LoveNullableRelationFilter } from '../love/love-nullable-relation-filter.input'
import { UploadListRelationFilter } from '../upload/upload-list-relation-filter.input'
import { LoveEventReviewListRelationFilter } from '../love-event-review/love-event-review-list-relation-filter.input'
import { LoveEventListRelationFilter } from '../love-event/love-event-list-relation-filter.input'

@InputType()
export class AccountWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: true })
  login?: string

  @Field(() => String, { nullable: true })
  email?: string

  @Field(() => String, { nullable: true })
  vkId?: string

  @Field(() => [AccountWhereInput], { nullable: true })
  AND?: Array<AccountWhereInput>

  @Field(() => [AccountWhereInput], { nullable: true })
  OR?: Array<AccountWhereInput>

  @Field(() => [AccountWhereInput], { nullable: true })
  NOT?: Array<AccountWhereInput>

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter

  @Field(() => EnumRoleNullableListFilter, { nullable: true })
  roles?: EnumRoleNullableListFilter

  @Field(() => StringNullableFilter, { nullable: true })
  vkPic?: StringNullableFilter

  @Field(() => EnumSexNullableFilter, { nullable: true })
  sex?: EnumSexNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  surname?: StringNullableFilter

  @Field(() => DateTimeNullableFilter, { nullable: true })
  birthday?: DateTimeNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  loveId?: StringNullableFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => LoveNullableRelationFilter, { nullable: true })
  love?: LoveNullableRelationFilter

  @Field(() => UploadListRelationFilter, { nullable: true })
  uploads?: UploadListRelationFilter

  @Field(() => LoveEventReviewListRelationFilter, { nullable: true })
  reviews?: LoveEventReviewListRelationFilter

  @Field(() => LoveEventListRelationFilter, { nullable: true })
  eventsOwner?: LoveEventListRelationFilter
}
