import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewWhereInput } from './review-where.input'
import { EnumAccessNullableListFilter } from '../prisma/enum-access-nullable-list-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { AccountRelationFilter } from '../account/account-relation-filter.input'
import { EventRelationFilter } from '../event/event-relation-filter.input'

@InputType()
export class ReviewWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => [ReviewWhereInput], { nullable: true })
  AND?: Array<ReviewWhereInput>

  @Field(() => [ReviewWhereInput], { nullable: true })
  OR?: Array<ReviewWhereInput>

  @Field(() => [ReviewWhereInput], { nullable: true })
  NOT?: Array<ReviewWhereInput>

  @Field(() => EnumAccessNullableListFilter, { nullable: true })
  access?: EnumAccessNullableListFilter

  @Field(() => StringFilter, { nullable: true })
  authorId?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  eventId?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => AccountRelationFilter, { nullable: true })
  author?: AccountRelationFilter

  @Field(() => EventRelationFilter, { nullable: true })
  event?: EventRelationFilter
}
