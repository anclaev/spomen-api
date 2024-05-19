import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input'
import { EnumSexNullableFilter } from '../prisma/enum-sex-nullable-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { LoveNullableRelationFilter } from '../love/love-nullable-relation-filter.input'
import { UploadListRelationFilter } from '../upload/upload-list-relation-filter.input'
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input'
import { OfferListRelationFilter } from '../offer/offer-list-relation-filter.input'
import { EventListRelationFilter } from '../event/event-list-relation-filter.input'

@InputType()
export class AccountWhereInput {
  @Field(() => [AccountWhereInput], { nullable: true })
  AND?: Array<AccountWhereInput>

  @Field(() => [AccountWhereInput], { nullable: true })
  OR?: Array<AccountWhereInput>

  @Field(() => [AccountWhereInput], { nullable: true })
  NOT?: Array<AccountWhereInput>

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  login?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter

  @Field(() => StringNullableFilter, { nullable: true })
  email?: StringNullableFilter

  @Field(() => EnumRoleNullableListFilter, { nullable: true })
  roles?: EnumRoleNullableListFilter

  @Field(() => StringNullableFilter, { nullable: true })
  vkId?: StringNullableFilter

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

  @Field(() => ReviewListRelationFilter, { nullable: true })
  reviews?: ReviewListRelationFilter

  @Field(() => OfferListRelationFilter, { nullable: true })
  offers?: OfferListRelationFilter

  @Field(() => OfferListRelationFilter, { nullable: true })
  offerOwner?: OfferListRelationFilter

  @Field(() => EventListRelationFilter, { nullable: true })
  eventsOwner?: EventListRelationFilter
}
