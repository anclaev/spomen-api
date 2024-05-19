import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveWhereInput } from './love-where.input'
import { Type } from 'class-transformer'
import { LoveUpdateWithoutEventsInput } from './love-update-without-events.input'

@InputType()
export class LoveUpdateToOneWithWhereWithoutEventsInput {
  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput

  @Field(() => LoveUpdateWithoutEventsInput, { nullable: false })
  @Type(() => LoveUpdateWithoutEventsInput)
  data!: LoveUpdateWithoutEventsInput
}
