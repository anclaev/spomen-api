import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class LoveScalarWhereWithAggregatesInput {
  @Field(() => [LoveScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<LoveScalarWhereWithAggregatesInput>

  @Field(() => [LoveScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<LoveScalarWhereWithAggregatesInput>

  @Field(() => [LoveScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<LoveScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  alias?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  private?: BoolWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
