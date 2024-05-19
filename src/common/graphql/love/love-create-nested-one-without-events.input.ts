import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveCreateWithoutEventsInput } from './love-create-without-events.input'
import { Type } from 'class-transformer'
import { LoveCreateOrConnectWithoutEventsInput } from './love-create-or-connect-without-events.input'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'

@InputType()
export class LoveCreateNestedOneWithoutEventsInput {
  @Field(() => LoveCreateWithoutEventsInput, { nullable: true })
  @Type(() => LoveCreateWithoutEventsInput)
  create?: LoveCreateWithoutEventsInput

  @Field(() => LoveCreateOrConnectWithoutEventsInput, { nullable: true })
  @Type(() => LoveCreateOrConnectWithoutEventsInput)
  connectOrCreate?: LoveCreateOrConnectWithoutEventsInput

  @Field(() => LoveWhereUniqueInput, { nullable: true })
  @Type(() => LoveWhereUniqueInput)
  connect?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
}
