import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventUpdateInput } from './love-event-update.input'
import { Type } from 'class-transformer'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'

@ArgsType()
export class UpdateOneLoveEventArgs {
  @Field(() => LoveEventUpdateInput, { nullable: false })
  @Type(() => LoveEventUpdateInput)
  data!: LoveEventUpdateInput

  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>
}
