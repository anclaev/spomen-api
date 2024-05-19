import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventWhereInput } from './love-event-where.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { UploadRelationFilter } from '../upload/upload-relation-filter.input'
import { LoveRelationFilter } from '../love/love-relation-filter.input'
import { AccountRelationFilter } from '../account/account-relation-filter.input'
import { LoveEventReviewListRelationFilter } from '../love-event-review/love-event-review-list-relation-filter.input'

@InputType()
export class LoveEventWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => [LoveEventWhereInput], { nullable: true })
  AND?: Array<LoveEventWhereInput>

  @Field(() => [LoveEventWhereInput], { nullable: true })
  OR?: Array<LoveEventWhereInput>

  @Field(() => [LoveEventWhereInput], { nullable: true })
  NOT?: Array<LoveEventWhereInput>

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

  @Field(() => LoveEventReviewListRelationFilter, { nullable: true })
  reviews?: LoveEventReviewListRelationFilter
}
