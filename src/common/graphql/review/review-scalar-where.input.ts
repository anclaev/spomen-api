import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { EnumAccessNullableListFilter } from '../prisma/enum-access-nullable-list-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class ReviewScalarWhereInput {
  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  AND?: Array<ReviewScalarWhereInput>

  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  OR?: Array<ReviewScalarWhereInput>

  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  NOT?: Array<ReviewScalarWhereInput>

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
