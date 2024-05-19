import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventCreateWithoutLoveInput } from './love-event-create-without-love.input'

@InputType()
export class LoveEventCreateOrConnectWithoutLoveInput {
  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventCreateWithoutLoveInput, { nullable: false })
  @Type(() => LoveEventCreateWithoutLoveInput)
  create!: LoveEventCreateWithoutLoveInput
}
