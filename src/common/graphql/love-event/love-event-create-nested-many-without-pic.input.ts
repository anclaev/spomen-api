import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateWithoutPicInput } from './love-event-create-without-pic.input'
import { Type } from 'class-transformer'
import { LoveEventCreateOrConnectWithoutPicInput } from './love-event-create-or-connect-without-pic.input'
import { LoveEventCreateManyPicInputEnvelope } from './love-event-create-many-pic-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'

@InputType()
export class LoveEventCreateNestedManyWithoutPicInput {
  @Field(() => [LoveEventCreateWithoutPicInput], { nullable: true })
  @Type(() => LoveEventCreateWithoutPicInput)
  create?: Array<LoveEventCreateWithoutPicInput>

  @Field(() => [LoveEventCreateOrConnectWithoutPicInput], { nullable: true })
  @Type(() => LoveEventCreateOrConnectWithoutPicInput)
  connectOrCreate?: Array<LoveEventCreateOrConnectWithoutPicInput>

  @Field(() => LoveEventCreateManyPicInputEnvelope, { nullable: true })
  @Type(() => LoveEventCreateManyPicInputEnvelope)
  createMany?: LoveEventCreateManyPicInputEnvelope

  @Field(() => [LoveEventWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>>
}
