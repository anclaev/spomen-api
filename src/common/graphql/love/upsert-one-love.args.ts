import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'
import { Type } from 'class-transformer'
import { LoveCreateInput } from './love-create.input'
import { LoveUpdateInput } from './love-update.input'

@ArgsType()
export class UpsertOneLoveArgs {
  @Field(() => LoveWhereUniqueInput, { nullable: false })
  @Type(() => LoveWhereUniqueInput)
  where!: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>

  @Field(() => LoveCreateInput, { nullable: false })
  @Type(() => LoveCreateInput)
  create!: LoveCreateInput

  @Field(() => LoveUpdateInput, { nullable: false })
  @Type(() => LoveUpdateInput)
  update!: LoveUpdateInput
}
