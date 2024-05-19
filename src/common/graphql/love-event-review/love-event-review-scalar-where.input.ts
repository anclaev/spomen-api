import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { EnumAccessNullableListFilter } from '../prisma/enum-access-nullable-list-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class LoveEventReviewScalarWhereInput {
  @Field(() => [LoveEventReviewScalarWhereInput], { nullable: true })
  AND?: Array<LoveEventReviewScalarWhereInput>

  @Field(() => [LoveEventReviewScalarWhereInput], { nullable: true })
  OR?: Array<LoveEventReviewScalarWhereInput>

  @Field(() => [LoveEventReviewScalarWhereInput], { nullable: true })
  NOT?: Array<LoveEventReviewScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter

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
}
