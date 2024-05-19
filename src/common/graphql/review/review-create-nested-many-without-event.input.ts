import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateWithoutEventInput } from './review-create-without-event.input'
import { Type } from 'class-transformer'
import { ReviewCreateOrConnectWithoutEventInput } from './review-create-or-connect-without-event.input'
import { ReviewCreateManyEventInputEnvelope } from './review-create-many-event-input-envelope.input'
import { Prisma } from '@prisma/client'
import { ReviewWhereUniqueInput } from './review-where-unique.input'

@InputType()
export class ReviewCreateNestedManyWithoutEventInput {
  @Field(() => [ReviewCreateWithoutEventInput], { nullable: true })
  @Type(() => ReviewCreateWithoutEventInput)
  create?: Array<ReviewCreateWithoutEventInput>

  @Field(() => [ReviewCreateOrConnectWithoutEventInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutEventInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutEventInput>

  @Field(() => ReviewCreateManyEventInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyEventInputEnvelope)
  createMany?: ReviewCreateManyEventInputEnvelope

  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>
}
