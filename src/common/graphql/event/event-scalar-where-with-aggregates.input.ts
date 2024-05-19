import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class EventScalarWhereWithAggregatesInput {
  @Field(() => [EventScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<EventScalarWhereWithAggregatesInput>

  @Field(() => [EventScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<EventScalarWhereWithAggregatesInput>

  @Field(() => [EventScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<EventScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  description?: StringWithAggregatesFilter

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date?: DateTimeNullableWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  picId?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  loveId?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  ownerId?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
