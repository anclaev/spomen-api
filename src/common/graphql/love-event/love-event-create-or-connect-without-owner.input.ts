import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventCreateWithoutOwnerInput } from './love-event-create-without-owner.input'

@InputType()
export class LoveEventCreateOrConnectWithoutOwnerInput {
  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventCreateWithoutOwnerInput, { nullable: false })
  @Type(() => LoveEventCreateWithoutOwnerInput)
  create!: LoveEventCreateWithoutOwnerInput
}
