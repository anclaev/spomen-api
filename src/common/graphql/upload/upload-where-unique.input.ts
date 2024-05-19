import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UploadWhereInput } from './upload-where.input'
import { StringFilter } from '../prisma/string-filter.input'
import { EnumAccessNullableListFilter } from '../prisma/enum-access-nullable-list-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { AccountRelationFilter } from '../account/account-relation-filter.input'
import { EventListRelationFilter } from '../event/event-list-relation-filter.input'

@InputType()
export class UploadWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => [UploadWhereInput], { nullable: true })
  AND?: Array<UploadWhereInput>

  @Field(() => [UploadWhereInput], { nullable: true })
  OR?: Array<UploadWhereInput>

  @Field(() => [UploadWhereInput], { nullable: true })
  NOT?: Array<UploadWhereInput>

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

  @Field(() => EventListRelationFilter, { nullable: true })
  eventPic?: EventListRelationFilter
}
