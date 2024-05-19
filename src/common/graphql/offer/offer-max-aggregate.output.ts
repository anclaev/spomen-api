import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class OfferMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: true })
  code?: string

  @Field(() => String, { nullable: true })
  loveId?: string

  @Field(() => String, { nullable: true })
  ownerId?: string

  @Field(() => String, { nullable: true })
  targetId?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
