import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { UploadRelationFilter } from '../upload/upload-relation-filter.input'
import { LoveRelationFilter } from '../love/love-relation-filter.input'
import { AccountRelationFilter } from '../account/account-relation-filter.input'
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input'

@InputType()
export class EventWhereInput {
  @Field(() => [EventWhereInput], { nullable: true })
  AND?: Array<EventWhereInput>

  @Field(() => [EventWhereInput], { nullable: true })
  OR?: Array<EventWhereInput>

  @Field(() => [EventWhereInput], { nullable: true })
  NOT?: Array<EventWhereInput>

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date?: DateTimeNullableFilter

  @Field(() => StringFilter, { nullable: true })
  picId?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  loveId?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  ownerId?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => UploadRelationFilter, { nullable: true })
  pic?: UploadRelationFilter

  @Field(() => LoveRelationFilter, { nullable: true })
  love?: LoveRelationFilter

  @Field(() => AccountRelationFilter, { nullable: true })
  owner?: AccountRelationFilter

  @Field(() => ReviewListRelationFilter, { nullable: true })
  reviews?: ReviewListRelationFilter
}
