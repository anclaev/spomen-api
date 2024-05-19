import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Access } from '../prisma/access.enum'
import { Account } from '../account/account.model'
import { LoveEvent } from '../love-event/love-event.model'

@ObjectType()
export class LoveEventReview {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => [Access], { nullable: true })
  access!: Array<keyof typeof Access>

  @Field(() => String, { nullable: false })
  authorId!: string

  @Field(() => String, { nullable: false })
  eventId!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Account, { nullable: false })
  author?: Account

  @Field(() => LoveEvent, { nullable: false })
  event?: LoveEvent
}
