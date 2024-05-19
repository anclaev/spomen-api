import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateWithoutOwnerInput } from './love-event-create-without-owner.input'
import { Type } from 'class-transformer'
import { LoveEventCreateOrConnectWithoutOwnerInput } from './love-event-create-or-connect-without-owner.input'
import { LoveEventCreateManyOwnerInputEnvelope } from './love-event-create-many-owner-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'

@InputType()
export class LoveEventUncheckedCreateNestedManyWithoutOwnerInput {
  @Field(() => [LoveEventCreateWithoutOwnerInput], { nullable: true })
  @Type(() => LoveEventCreateWithoutOwnerInput)
  create?: Array<LoveEventCreateWithoutOwnerInput>

  @Field(() => [LoveEventCreateOrConnectWithoutOwnerInput], { nullable: true })
  @Type(() => LoveEventCreateOrConnectWithoutOwnerInput)
  connectOrCreate?: Array<LoveEventCreateOrConnectWithoutOwnerInput>

  @Field(() => LoveEventCreateManyOwnerInputEnvelope, { nullable: true })
  @Type(() => LoveEventCreateManyOwnerInputEnvelope)
  createMany?: LoveEventCreateManyOwnerInputEnvelope

  @Field(() => [LoveEventWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>>
}
