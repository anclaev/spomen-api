import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Account } from '../account/account.model'
import { LoveEvent } from '../love-event/love-event.model'
import { LoveCount } from './love-count.output'

@ObjectType()
export class Love {
  @Field(() => ID, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  alias!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => Boolean, { nullable: false })
  private!: boolean

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => [Account], { nullable: true })
  members?: Array<Account>

  @Field(() => [LoveEvent], { nullable: true })
  events?: Array<LoveEvent>

  @Field(() => LoveCount, { nullable: false })
  _count?: LoveCount
}
