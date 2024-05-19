import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { EnumRoleNullableListFilter } from '../prisma/enum-role-nullable-list-filter.input'
import { EnumSexNullableFilter } from '../prisma/enum-sex-nullable-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class AccountScalarWhereInput {
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  AND?: Array<AccountScalarWhereInput>

  @Field(() => [AccountScalarWhereInput], { nullable: true })
  OR?: Array<AccountScalarWhereInput>

  @Field(() => [AccountScalarWhereInput], { nullable: true })
  NOT?: Array<AccountScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  login?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter

  @Field(() => StringNullableFilter, { nullable: true })
  email?: StringNullableFilter

  @Field(() => EnumRoleNullableListFilter, { nullable: true })
  roles?: EnumRoleNullableListFilter

  @Field(() => StringNullableFilter, { nullable: true })
  vkId?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  vkPic?: StringNullableFilter

  @Field(() => EnumSexNullableFilter, { nullable: true })
  sex?: EnumSexNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  surname?: StringNullableFilter

  @Field(() => DateTimeNullableFilter, { nullable: true })
  birthday?: DateTimeNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  loveId?: StringNullableFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
