import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { EnumAccessNullableListFilter } from '../prisma/enum-access-nullable-list-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class UploadScalarWhereWithAggregatesInput {
  @Field(() => [UploadScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UploadScalarWhereWithAggregatesInput>

  @Field(() => [UploadScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UploadScalarWhereWithAggregatesInput>

  @Field(() => [UploadScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UploadScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  url?: StringWithAggregatesFilter

  @Field(() => EnumAccessNullableListFilter, { nullable: true })
  access?: EnumAccessNullableListFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  ownerId?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
