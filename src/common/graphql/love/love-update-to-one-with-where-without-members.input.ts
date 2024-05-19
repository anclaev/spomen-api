import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveWhereInput } from './love-where.input'
import { Type } from 'class-transformer'
import { LoveUpdateWithoutMembersInput } from './love-update-without-members.input'

@InputType()
export class LoveUpdateToOneWithWhereWithoutMembersInput {
  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput

  @Field(() => LoveUpdateWithoutMembersInput, { nullable: false })
  @Type(() => LoveUpdateWithoutMembersInput)
  data!: LoveUpdateWithoutMembersInput
}
