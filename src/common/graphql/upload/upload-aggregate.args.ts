import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { UploadWhereInput } from './upload-where.input'
import { Type } from 'class-transformer'
import { UploadOrderByWithRelationInput } from './upload-order-by-with-relation.input'
import { Prisma } from '@prisma/client'
import { UploadWhereUniqueInput } from './upload-where-unique.input'
import { Int } from '@nestjs/graphql'
import { UploadCountAggregateInput } from './upload-count-aggregate.input'
import { UploadMinAggregateInput } from './upload-min-aggregate.input'
import { UploadMaxAggregateInput } from './upload-max-aggregate.input'

@ArgsType()
export class UploadAggregateArgs {
  @Field(() => UploadWhereInput, { nullable: true })
  @Type(() => UploadWhereInput)
  where?: UploadWhereInput

  @Field(() => [UploadOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UploadOrderByWithRelationInput>

  @Field(() => UploadWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UploadWhereUniqueInput, 'id'>

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => UploadCountAggregateInput, { nullable: true })
  _count?: UploadCountAggregateInput

  @Field(() => UploadMinAggregateInput, { nullable: true })
  _min?: UploadMinAggregateInput

  @Field(() => UploadMaxAggregateInput, { nullable: true })
  _max?: UploadMaxAggregateInput
}
