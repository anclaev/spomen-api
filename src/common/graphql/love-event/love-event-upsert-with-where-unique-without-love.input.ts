import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventUpdateWithoutLoveInput } from './love-event-update-without-love.input'
import { LoveEventCreateWithoutLoveInput } from './love-event-create-without-love.input'

@InputType()
export class LoveEventUpsertWithWhereUniqueWithoutLoveInput {
  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventUpdateWithoutLoveInput, { nullable: false })
  @Type(() => LoveEventUpdateWithoutLoveInput)
  update!: LoveEventUpdateWithoutLoveInput

  @Field(() => LoveEventCreateWithoutLoveInput, { nullable: false })
  @Type(() => LoveEventCreateWithoutLoveInput)
  create!: LoveEventCreateWithoutLoveInput
}
