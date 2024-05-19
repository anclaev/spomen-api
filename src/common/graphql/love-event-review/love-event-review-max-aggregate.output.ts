import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class LoveEventReviewMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: true })
  authorId?: string

  @Field(() => String, { nullable: true })
  eventId?: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
