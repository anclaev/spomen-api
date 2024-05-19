import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveWhereInput } from './love-where.input'
import { StringFilter } from '../prisma/string-filter.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { AccountListRelationFilter } from '../account/account-list-relation-filter.input'
import { EventListRelationFilter } from '../event/event-list-relation-filter.input'
import { OfferListRelationFilter } from '../offer/offer-list-relation-filter.input'

@InputType()
export class LoveWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: true })
  alias?: string

  @Field(() => [LoveWhereInput], { nullable: true })
  AND?: Array<LoveWhereInput>

  @Field(() => [LoveWhereInput], { nullable: true })
  OR?: Array<LoveWhereInput>

  @Field(() => [LoveWhereInput], { nullable: true })
  NOT?: Array<LoveWhereInput>

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => BoolFilter, { nullable: true })
  private?: BoolFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => AccountListRelationFilter, { nullable: true })
  members?: AccountListRelationFilter

  @Field(() => EventListRelationFilter, { nullable: true })
  events?: EventListRelationFilter

  @Field(() => OfferListRelationFilter, { nullable: true })
  Offer?: OfferListRelationFilter
}
