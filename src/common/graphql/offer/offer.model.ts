import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Love } from '../love/love.model'
import { Account } from '../account/account.model'

@ObjectType()
export class Offer {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  code!: string

  @Field(() => String, { nullable: false })
  loveId!: string

  @Field(() => String, { nullable: false })
  ownerId!: string

  @Field(() => String, { nullable: false })
  targetId!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Love, { nullable: false })
  love?: Love

  @Field(() => Account, { nullable: false })
  owner?: Account

  @Field(() => Account, { nullable: false })
  target?: Account
}
