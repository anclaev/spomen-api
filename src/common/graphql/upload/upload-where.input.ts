import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { EnumAccessNullableListFilter } from '../prisma/enum-access-nullable-list-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { AccountRelationFilter } from '../account/account-relation-filter.input'
import { LoveEventListRelationFilter } from '../love-event/love-event-list-relation-filter.input'

@InputType()
export class UploadWhereInput {
  @Field(() => [UploadWhereInput], { nullable: true })
  AND?: Array<UploadWhereInput>

  @Field(() => [UploadWhereInput], { nullable: true })
  OR?: Array<UploadWhereInput>

  @Field(() => [UploadWhereInput], { nullable: true })
  NOT?: Array<UploadWhereInput>

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  url?: StringFilter

  @Field(() => EnumAccessNullableListFilter, { nullable: true })
  access?: EnumAccessNullableListFilter

  @Field(() => StringFilter, { nullable: true })
  ownerId?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => AccountRelationFilter, { nullable: true })
  owner?: AccountRelationFilter

  @Field(() => LoveEventListRelationFilter, { nullable: true })
  eventPic?: LoveEventListRelationFilter
}
