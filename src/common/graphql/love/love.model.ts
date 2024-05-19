import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { Account } from '../account/account.model'
import { Event } from '../event/event.model'
import { Offer } from '../offer/offer.model'
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

  @Field(() => [Event], { nullable: true })
  events?: Array<Event>

  @Field(() => [Offer], { nullable: true })
  Offer?: Array<Offer>

  @Field(() => LoveCount, { nullable: false })
  _count?: LoveCount
}
