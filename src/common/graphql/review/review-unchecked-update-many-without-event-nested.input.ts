import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateWithoutEventInput } from './review-create-without-event.input'
import { Type } from 'class-transformer'
import { ReviewCreateOrConnectWithoutEventInput } from './review-create-or-connect-without-event.input'
import { ReviewUpsertWithWhereUniqueWithoutEventInput } from './review-upsert-with-where-unique-without-event.input'
import { ReviewCreateManyEventInputEnvelope } from './review-create-many-event-input-envelope.input'
import { Prisma } from '@prisma/client'
import { ReviewWhereUniqueInput } from './review-where-unique.input'
import { ReviewUpdateWithWhereUniqueWithoutEventInput } from './review-update-with-where-unique-without-event.input'
import { ReviewUpdateManyWithWhereWithoutEventInput } from './review-update-many-with-where-without-event.input'
import { ReviewScalarWhereInput } from './review-scalar-where.input'

@InputType()
export class ReviewUncheckedUpdateManyWithoutEventNestedInput {
  @Field(() => [ReviewCreateWithoutEventInput], { nullable: true })
  @Type(() => ReviewCreateWithoutEventInput)
  create?: Array<ReviewCreateWithoutEventInput>

  @Field(() => [ReviewCreateOrConnectWithoutEventInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutEventInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutEventInput>

  @Field(() => [ReviewUpsertWithWhereUniqueWithoutEventInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutEventInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutEventInput>

  @Field(() => ReviewCreateManyEventInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyEventInputEnvelope)
  createMany?: ReviewCreateManyEventInputEnvelope

  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>

  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>

  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>

  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>

  @Field(() => [ReviewUpdateWithWhereUniqueWithoutEventInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutEventInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutEventInput>

  @Field(() => [ReviewUpdateManyWithWhereWithoutEventInput], { nullable: true })
  @Type(() => ReviewUpdateManyWithWhereWithoutEventInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutEventInput>

  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>
}
