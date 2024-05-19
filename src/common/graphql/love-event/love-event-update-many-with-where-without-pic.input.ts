import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventScalarWhereInput } from './love-event-scalar-where.input'
import { Type } from 'class-transformer'
import { LoveEventUpdateManyMutationInput } from './love-event-update-many-mutation.input'

@InputType()
export class LoveEventUpdateManyWithWhereWithoutPicInput {
  @Field(() => LoveEventScalarWhereInput, { nullable: false })
  @Type(() => LoveEventScalarWhereInput)
  where!: LoveEventScalarWhereInput

  @Field(() => LoveEventUpdateManyMutationInput, { nullable: false })
  @Type(() => LoveEventUpdateManyMutationInput)
  data!: LoveEventUpdateManyMutationInput
}
