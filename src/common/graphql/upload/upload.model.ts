import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Access } from '../prisma/access.enum'
import { Account } from '../account/account.model'
import { Event } from '../event/event.model'
import { UploadCount } from './upload-count.output'

@ObjectType()
export class Upload {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  url!: string

  @Field(() => [Access], { nullable: true })
  access!: Array<keyof typeof Access>

  @Field(() => String, { nullable: false })
  ownerId!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Account, { nullable: false })
  owner?: Account

  @Field(() => [Event], { nullable: true })
  eventPic?: Array<Event>

  @Field(() => UploadCount, { nullable: false })
  _count?: UploadCount
}
