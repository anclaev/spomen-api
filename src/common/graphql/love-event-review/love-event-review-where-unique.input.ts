import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewWhereInput } from './love-event-review-where.input'
import { EnumAccessNullableListFilter } from '../prisma/enum-access-nullable-list-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { AccountRelationFilter } from '../account/account-relation-filter.input'
import { LoveEventRelationFilter } from '../love-event/love-event-relation-filter.input'

@InputType()
export class LoveEventReviewWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => [LoveEventReviewWhereInput], { nullable: true })
  AND?: Array<LoveEventReviewWhereInput>

  @Field(() => [LoveEventReviewWhereInput], { nullable: true })
  OR?: Array<LoveEventReviewWhereInput>

  @Field(() => [LoveEventReviewWhereInput], { nullable: true })
  NOT?: Array<LoveEventReviewWhereInput>

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

  @Field(() => LoveEventRelationFilter, { nullable: true })
  event?: LoveEventRelationFilter
}
