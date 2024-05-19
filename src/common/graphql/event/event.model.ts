import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Upload } from '../upload/upload.model'
import { Love } from '../love/love.model'
import { Account } from '../account/account.model'
import { Review } from '../review/review.model'
import { EventCount } from './event-count.output'

@ObjectType()
export class Event {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => Date, { nullable: true })
  date!: Date | null

  @Field(() => String, { nullable: false })
  picId!: string

  @Field(() => String, { nullable: false })
  loveId!: string

  @Field(() => String, { nullable: false })
  ownerId!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Upload, { nullable: false })
  pic?: Upload

  @Field(() => Love, { nullable: false })
  love?: Love

  @Field(() => Account, { nullable: false })
  owner?: Account

  @Field(() => [Review], { nullable: true })
  reviews?: Array<Review>

  @Field(() => EventCount, { nullable: false })
  _count?: EventCount
}
