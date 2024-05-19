import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveCreateWithoutEventsInput } from './love-create-without-events.input'
import { Type } from 'class-transformer'
import { LoveCreateOrConnectWithoutEventsInput } from './love-create-or-connect-without-events.input'
import { LoveUpsertWithoutEventsInput } from './love-upsert-without-events.input'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'
import { LoveUpdateToOneWithWhereWithoutEventsInput } from './love-update-to-one-with-where-without-events.input'

@InputType()
export class LoveUpdateOneRequiredWithoutEventsNestedInput {
  @Field(() => LoveCreateWithoutEventsInput, { nullable: true })
  @Type(() => LoveCreateWithoutEventsInput)
  create?: LoveCreateWithoutEventsInput

  @Field(() => LoveCreateOrConnectWithoutEventsInput, { nullable: true })
  @Type(() => LoveCreateOrConnectWithoutEventsInput)
  connectOrCreate?: LoveCreateOrConnectWithoutEventsInput

  @Field(() => LoveUpsertWithoutEventsInput, { nullable: true })
  @Type(() => LoveUpsertWithoutEventsInput)
  upsert?: LoveUpsertWithoutEventsInput

  @Field(() => LoveWhereUniqueInput, { nullable: true })
  @Type(() => LoveWhereUniqueInput)
  connect?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>

  @Field(() => LoveUpdateToOneWithWhereWithoutEventsInput, { nullable: true })
  @Type(() => LoveUpdateToOneWithWhereWithoutEventsInput)
  update?: LoveUpdateToOneWithWhereWithoutEventsInput
}
