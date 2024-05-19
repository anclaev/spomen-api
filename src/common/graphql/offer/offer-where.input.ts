import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { LoveRelationFilter } from '../love/love-relation-filter.input'
import { AccountRelationFilter } from '../account/account-relation-filter.input'

@InputType()
export class OfferWhereInput {
  @Field(() => [OfferWhereInput], { nullable: true })
  AND?: Array<OfferWhereInput>

  @Field(() => [OfferWhereInput], { nullable: true })
  OR?: Array<OfferWhereInput>

  @Field(() => [OfferWhereInput], { nullable: true })
  NOT?: Array<OfferWhereInput>

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  loveId?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  ownerId?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  targetId?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => LoveRelationFilter, { nullable: true })
  love?: LoveRelationFilter

  @Field(() => AccountRelationFilter, { nullable: true })
  owner?: AccountRelationFilter

  @Field(() => AccountRelationFilter, { nullable: true })
  target?: AccountRelationFilter
}
