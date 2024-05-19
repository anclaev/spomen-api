import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventWhereInput } from './love-event-where.input'
import { Type } from 'class-transformer'

@ArgsType()
export class DeleteManyLoveEventArgs {
  @Field(() => LoveEventWhereInput, { nullable: true })
  @Type(() => LoveEventWhereInput)
  where?: LoveEventWhereInput
}
