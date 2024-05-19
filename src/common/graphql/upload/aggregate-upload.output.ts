import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { UploadCountAggregate } from './upload-count-aggregate.output'
import { UploadMinAggregate } from './upload-min-aggregate.output'
import { UploadMaxAggregate } from './upload-max-aggregate.output'

@ObjectType()
export class AggregateUpload {
  @Field(() => UploadCountAggregate, { nullable: true })
  _count?: UploadCountAggregate

  @Field(() => UploadMinAggregate, { nullable: true })
  _min?: UploadMinAggregate

  @Field(() => UploadMaxAggregate, { nullable: true })
  _max?: UploadMaxAggregate
}
