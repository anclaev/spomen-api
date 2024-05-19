import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventUpdateWithoutOwnerInput } from './love-event-update-without-owner.input'
import { LoveEventCreateWithoutOwnerInput } from './love-event-create-without-owner.input'

@InputType()
export class LoveEventUpsertWithWhereUniqueWithoutOwnerInput {
  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventUpdateWithoutOwnerInput, { nullable: false })
  @Type(() => LoveEventUpdateWithoutOwnerInput)
  update!: LoveEventUpdateWithoutOwnerInput

  @Field(() => LoveEventCreateWithoutOwnerInput, { nullable: false })
  @Type(() => LoveEventCreateWithoutOwnerInput)
  create!: LoveEventCreateWithoutOwnerInput
}
