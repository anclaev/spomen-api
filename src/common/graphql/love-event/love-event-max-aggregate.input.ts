import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class LoveEventMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  name?: true

  @Field(() => Boolean, { nullable: true })
  description?: true

  @Field(() => Boolean, { nullable: true })
  date?: true

  @Field(() => Boolean, { nullable: true })
  picId?: true

  @Field(() => Boolean, { nullable: true })
  loveId?: true

  @Field(() => Boolean, { nullable: true })
  ownerId?: true

  @Field(() => Boolean, { nullable: true })
  createdAt?: true

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true
}
