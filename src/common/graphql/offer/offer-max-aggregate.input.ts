import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class OfferMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  code?: true

  @Field(() => Boolean, { nullable: true })
  loveId?: true

  @Field(() => Boolean, { nullable: true })
  ownerId?: true

  @Field(() => Boolean, { nullable: true })
  targetId?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true
}
