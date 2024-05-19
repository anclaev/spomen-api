import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventUpdateWithoutPicInput } from './love-event-update-without-pic.input'

@InputType()
export class LoveEventUpdateWithWhereUniqueWithoutPicInput {
  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventUpdateWithoutPicInput, { nullable: false })
  @Type(() => LoveEventUpdateWithoutPicInput)
  data!: LoveEventUpdateWithoutPicInput
}
