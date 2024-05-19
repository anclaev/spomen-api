import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveUpdateWithoutEventsInput } from './love-update-without-events.input'
import { Type } from 'class-transformer'
import { LoveCreateWithoutEventsInput } from './love-create-without-events.input'
import { LoveWhereInput } from './love-where.input'

@InputType()
export class LoveUpsertWithoutEventsInput {
  @Field(() => LoveUpdateWithoutEventsInput, { nullable: false })
  @Type(() => LoveUpdateWithoutEventsInput)
  update!: LoveUpdateWithoutEventsInput

  @Field(() => LoveCreateWithoutEventsInput, { nullable: false })
  @Type(() => LoveCreateWithoutEventsInput)
  create!: LoveCreateWithoutEventsInput

  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput
}
