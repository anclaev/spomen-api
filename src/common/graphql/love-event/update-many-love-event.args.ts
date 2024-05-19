import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveEventUpdateManyMutationInput } from './love-event-update-many-mutation.input'
import { Type } from 'class-transformer'
import { LoveEventWhereInput } from './love-event-where.input'

@ArgsType()
export class UpdateManyLoveEventArgs {
  @Field(() => LoveEventUpdateManyMutationInput, { nullable: false })
  @Type(() => LoveEventUpdateManyMutationInput)
  data!: LoveEventUpdateManyMutationInput

  @Field(() => LoveEventWhereInput, { nullable: true })
  @Type(() => LoveEventWhereInput)
  where?: LoveEventWhereInput
}
