import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Role } from '../prisma/role.enum'
import { Sex } from '../prisma/sex.enum'
import { Love } from '../love/love.model'
import { Upload } from '../upload/upload.model'
import { LoveEventReview } from '../love-event-review/love-event-review.model'
import { LoveEvent } from '../love-event/love-event.model'
import { AccountCount } from './account-count.output'

@ObjectType()
export class Account {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  login!: string

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => String, { nullable: true })
  email!: string | null

  @Field(() => [Role], { nullable: true })
  roles!: Array<keyof typeof Role>

  @Field(() => String, { nullable: true })
  vkId!: string | null

  @Field(() => String, { nullable: true })
  vkPic!: string | null

  @Field(() => Sex, { nullable: true })
  sex!: keyof typeof Sex | null

  @Field(() => String, { nullable: true })
  name!: string | null

  @Field(() => String, { nullable: true })
  surname!: string | null

  @Field(() => Date, { nullable: true })
  birthday!: Date | null

  @Field(() => String, { nullable: true })
  loveId!: string | null

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Love, { nullable: true })
  love?: Love | null

  @Field(() => [Upload], { nullable: true })
  uploads?: Array<Upload>

  @Field(() => [LoveEventReview], { nullable: true })
  reviews?: Array<LoveEventReview>

  @Field(() => [LoveEvent], { nullable: true })
  eventsOwner?: Array<LoveEvent>

  @Field(() => AccountCount, { nullable: false })
  _count?: AccountCount
}
