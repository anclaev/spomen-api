import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class AccountCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  login?: true

  @Field(() => Boolean, { nullable: true })
  password?: true

  @Field(() => Boolean, { nullable: true })
  email?: true

  @Field(() => Boolean, { nullable: true })
  roles?: true

  @Field(() => Boolean, { nullable: true })
  vkId?: true

  @Field(() => Boolean, { nullable: true })
  vkPic?: true

  @Field(() => Boolean, { nullable: true })
  sex?: true

  @Field(() => Boolean, { nullable: true })
  name?: true

  @Field(() => Boolean, { nullable: true })
  surname?: true

  @Field(() => Boolean, { nullable: true })
  birthday?: true

  @Field(() => Boolean, { nullable: true })
  loveId?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true

  @Field(() => Boolean, { nullable: true })
  _all?: true
}
