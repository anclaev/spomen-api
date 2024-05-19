import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'
import { Type } from 'class-transformer'
import { LoveCreateWithoutEventsInput } from './love-create-without-events.input'

@InputType()
export class LoveCreateOrConnectWithoutEventsInput {
  @Field(() => LoveWhereUniqueInput, { nullable: false })
  @Type(() => LoveWhereUniqueInput)
  where!: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>

  @Field(() => LoveCreateWithoutEventsInput, { nullable: false })
  @Type(() => LoveCreateWithoutEventsInput)
  create!: LoveCreateWithoutEventsInput
}
