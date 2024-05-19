import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { EnumAccessNullableListFilter } from '../prisma/enum-access-nullable-list-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class UploadScalarWhereInput {
  @Field(() => [UploadScalarWhereInput], { nullable: true })
  AND?: Array<UploadScalarWhereInput>

  @Field(() => [UploadScalarWhereInput], { nullable: true })
  OR?: Array<UploadScalarWhereInput>

  @Field(() => [UploadScalarWhereInput], { nullable: true })
  NOT?: Array<UploadScalarWhereInput>

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  url?: StringFilter

  @Field(() => EnumAccessNullableListFilter, { nullable: true })
  access?: EnumAccessNullableListFilter

  @Field(() => StringFilter, { nullable: true })
  ownerId?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter
}
