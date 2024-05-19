import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Sex } from '../prisma/sex.enum'

@ObjectType()
export class AccountMinAggregate {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: true })
  login?: string

  @Field(() => String, { nullable: true })
  password?: string

  @Field(() => String, { nullable: true })
  email?: string

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

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
