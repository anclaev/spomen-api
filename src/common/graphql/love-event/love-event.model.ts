import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Upload } from '../upload/upload.model'
import { Love } from '../love/love.model'
import { Account } from '../account/account.model'
import { LoveEventReview } from '../love-event-review/love-event-review.model'
import { LoveEventCount } from './love-event-count.output'

@ObjectType()
export class LoveEvent {
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

  @Field(() => [LoveEventReview], { nullable: true })
  reviews?: Array<LoveEventReview>

  @Field(() => LoveEventCount, { nullable: false })
  _count?: LoveEventCount
}
