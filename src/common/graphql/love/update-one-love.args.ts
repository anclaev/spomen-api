import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveUpdateInput } from './love-update.input'
import { Type } from 'class-transformer'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'

@ArgsType()
export class UpdateOneLoveArgs {
  @Field(() => LoveUpdateInput, { nullable: false })
  @Type(() => LoveUpdateInput)
  data!: LoveUpdateInput

  @Field(() => LoveWhereUniqueInput, { nullable: false })
  @Type(() => LoveWhereUniqueInput)
  where!: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>
}
