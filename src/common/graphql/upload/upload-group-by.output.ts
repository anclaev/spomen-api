import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Access } from '../prisma/access.enum'
import { UploadCountAggregate } from './upload-count-aggregate.output'
import { UploadMinAggregate } from './upload-min-aggregate.output'
import { UploadMaxAggregate } from './upload-max-aggregate.output'

@ObjectType()
export class UploadGroupBy {
  @Field(() => String, { nullable: false })
  id!: string

  @Field(() => String, { nullable: false })
  url!: string

  @Field(() => [Access], { nullable: true })
  access?: Array<keyof typeof Access>

  @Field(() => String, { nullable: false })
  ownerId!: string

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string

  @Field(() => UploadCountAggregate, { nullable: true })
  _count?: UploadCountAggregate

  @Field(() => UploadMinAggregate, { nullable: true })
  _min?: UploadMinAggregate

  @Field(() => UploadMaxAggregate, { nullable: true })
  _max?: UploadMaxAggregate
}
