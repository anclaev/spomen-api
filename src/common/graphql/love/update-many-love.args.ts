import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { LoveUpdateManyMutationInput } from './love-update-many-mutation.input'
import { Type } from 'class-transformer'
import { LoveWhereInput } from './love-where.input'

@ArgsType()
export class UpdateManyLoveArgs {
  @Field(() => LoveUpdateManyMutationInput, { nullable: false })
  @Type(() => LoveUpdateManyMutationInput)
  data!: LoveUpdateManyMutationInput

  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput
}
