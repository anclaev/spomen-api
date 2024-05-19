import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateWithoutLoveInput } from './love-event-create-without-love.input'
import { Type } from 'class-transformer'
import { LoveEventCreateOrConnectWithoutLoveInput } from './love-event-create-or-connect-without-love.input'
import { LoveEventCreateManyLoveInputEnvelope } from './love-event-create-many-love-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'

@InputType()
export class LoveEventCreateNestedManyWithoutLoveInput {
  @Field(() => [LoveEventCreateWithoutLoveInput], { nullable: true })
  @Type(() => LoveEventCreateWithoutLoveInput)
  create?: Array<LoveEventCreateWithoutLoveInput>

  @Field(() => [LoveEventCreateOrConnectWithoutLoveInput], { nullable: true })
  @Type(() => LoveEventCreateOrConnectWithoutLoveInput)
  connectOrCreate?: Array<LoveEventCreateOrConnectWithoutLoveInput>

  @Field(() => LoveEventCreateManyLoveInputEnvelope, { nullable: true })
  @Type(() => LoveEventCreateManyLoveInputEnvelope)
  createMany?: LoveEventCreateManyLoveInputEnvelope

  @Field(() => [LoveEventWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>>
}
