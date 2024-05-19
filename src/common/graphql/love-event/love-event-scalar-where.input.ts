import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class LoveEventScalarWhereInput {
  @Field(() => [LoveEventScalarWhereInput], { nullable: true })
  AND?: Array<LoveEventScalarWhereInput>

  @Field(() => [LoveEventScalarWhereInput], { nullable: true })
  OR?: Array<LoveEventScalarWhereInput>

  @Field(() => [LoveEventScalarWhereInput], { nullable: true })
  NOT?: Array<LoveEventScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date?: DateTimeNullableFilter

  @Field(() => StringFilter, { nullable: true })
  picId?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  loveId?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  ownerId?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
