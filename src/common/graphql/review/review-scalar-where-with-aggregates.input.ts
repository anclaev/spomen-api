import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { EnumAccessNullableListFilter } from '../prisma/enum-access-nullable-list-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class ReviewScalarWhereWithAggregatesInput {
  @Field(() => [ReviewScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ReviewScalarWhereWithAggregatesInput>

  @Field(() => [ReviewScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ReviewScalarWhereWithAggregatesInput>

  @Field(() => [ReviewScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ReviewScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter

  @Field(() => EnumAccessNullableListFilter, { nullable: true })
  access?: EnumAccessNullableListFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  authorId?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  eventId?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
