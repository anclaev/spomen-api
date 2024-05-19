import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Role } from '../prisma/role.enum'
import { Sex } from '../prisma/sex.enum'
import { AccountCountAggregate } from './account-count-aggregate.output'
import { AccountMinAggregate } from './account-min-aggregate.output'
import { AccountMaxAggregate } from './account-max-aggregate.output'

@ObjectType()
export class AccountGroupBy {
  @Field(() => String, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  login!: string

  @Field(() => String, { nullable: false })
  password!: string

  @Field(() => String, { nullable: true })
  email?: string

  @Field(() => [Role], { nullable: true })
  roles?: Array<keyof typeof Role>

  @Field(() => String, { nullable: true })
  vkId?: string

  @Field(() => String, { nullable: true })
  vkPic?: string

  @Field(() => Sex, { nullable: true })
  sex?: keyof typeof Sex

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  surname?: string

  @Field(() => Date, { nullable: true })
  birthday?: Date | string

  @Field(() => String, { nullable: true })
  loveId?: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => AccountCountAggregate, { nullable: true })
  _count?: AccountCountAggregate

  @Field(() => AccountMinAggregate, { nullable: true })
  _min?: AccountMinAggregate

  @Field(() => AccountMaxAggregate, { nullable: true })
  _max?: AccountMaxAggregate
}
