import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveUpdateWithoutMembersInput } from './love-update-without-members.input'
import { Type } from 'class-transformer'
import { LoveCreateWithoutMembersInput } from './love-create-without-members.input'
import { LoveWhereInput } from './love-where.input'

@InputType()
export class LoveUpsertWithoutMembersInput {
  @Field(() => LoveUpdateWithoutMembersInput, { nullable: false })
  @Type(() => LoveUpdateWithoutMembersInput)
  update!: LoveUpdateWithoutMembersInput

  @Field(() => LoveCreateWithoutMembersInput, { nullable: false })
  @Type(() => LoveCreateWithoutMembersInput)
  create!: LoveCreateWithoutMembersInput

  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput
}
