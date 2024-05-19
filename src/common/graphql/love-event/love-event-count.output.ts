import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class LoveEventCount {
  @Field(() => Int, { nullable: false })
  reviews?: number
}
