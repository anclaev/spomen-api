import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventWhereInput } from './love-event-where.input'
import { Type } from 'class-transformer'
import { LoveEventOrderByWithRelationInput } from './love-event-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { Int } from '@nestjs/graphql'
import { LoveEventScalarFieldEnum } from './love-event-scalar-field.enum'

@ArgsType()
export class FindFirstLoveEventOrThrowArgs {
  @Field(() => LoveEventWhereInput, { nullable: true })
  @Type(() => LoveEventWhereInput)
  where?: LoveEventWhereInput

  @Field(() => [LoveEventOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<LoveEventOrderByWithRelationInput>

  @Field(() => LoveEventWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [LoveEventScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof LoveEventScalarFieldEnum>
}
