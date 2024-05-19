import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'

@InputType()
export class OfferScalarWhereWithAggregatesInput {
  @Field(() => [OfferScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<OfferScalarWhereWithAggregatesInput>

  @Field(() => [OfferScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<OfferScalarWhereWithAggregatesInput>

  @Field(() => [OfferScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<OfferScalarWhereWithAggregatesInput>

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  code?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  loveId?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  ownerId?: StringWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  targetId?: StringWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter
}
