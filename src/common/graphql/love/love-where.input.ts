import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { BoolFilter } from '../prisma/bool-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { AccountListRelationFilter } from '../account/account-list-relation-filter.input'
import { LoveEventListRelationFilter } from '../love-event/love-event-list-relation-filter.input'

@InputType()
export class LoveWhereInput {
  @Field(() => [LoveWhereInput], { nullable: true })
  AND?: Array<LoveWhereInput>

  @Field(() => [LoveWhereInput], { nullable: true })
  OR?: Array<LoveWhereInput>

  @Field(() => [LoveWhereInput], { nullable: true })
  NOT?: Array<LoveWhereInput>

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  alias?: StringFilter

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

  @Field(() => LoveEventListRelationFilter, { nullable: true })
  events?: LoveEventListRelationFilter
}
