import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class UploadCount {
  @Field(() => Int, { nullable: false })
  eventPic?: number
}
