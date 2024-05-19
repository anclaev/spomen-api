import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Type } from 'class-transformer'
import { LoveEventCreateInput } from './love-event-create.input'
import { LoveEventUpdateInput } from './love-event-update.input'

@ArgsType()
export class UpsertOneLoveEventArgs {
  @Field(() => LoveEventWhereUniqueInput, { nullable: false })
  @Type(() => LoveEventWhereUniqueInput)
  where!: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventCreateInput, { nullable: false })
  @Type(() => LoveEventCreateInput)
  create!: LoveEventCreateInput

  @Field(() => LoveEventUpdateInput, { nullable: false })
  @Type(() => LoveEventUpdateInput)
  update!: LoveEventUpdateInput
}
