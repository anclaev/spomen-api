import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventUpdateWithoutLoveInput } from './love-event-update-without-love.input'

@InputType()
export class LoveEventUpdateWithWhereUniqueWithoutLoveInput {
  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventUpdateWithoutLoveInput, { nullable: false })
  @Type(() => LoveEventUpdateWithoutLoveInput)
  data!: LoveEventUpdateWithoutLoveInput
}
