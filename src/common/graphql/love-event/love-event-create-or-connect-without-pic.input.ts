import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventCreateWithoutPicInput } from './love-event-create-without-pic.input'

@InputType()
export class LoveEventCreateOrConnectWithoutPicInput {
  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventCreateWithoutPicInput, { nullable: false })
  @Type(() => LoveEventCreateWithoutPicInput)
  create!: LoveEventCreateWithoutPicInput
}
