import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'

@InputType()
export class OfferScalarWhereInput {
  @Field(() => [OfferScalarWhereInput], { nullable: true })
  AND?: Array<OfferScalarWhereInput>

  @Field(() => [OfferScalarWhereInput], { nullable: true })
  OR?: Array<OfferScalarWhereInput>

  @Field(() => [OfferScalarWhereInput], { nullable: true })
  NOT?: Array<OfferScalarWhereInput>

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
}
