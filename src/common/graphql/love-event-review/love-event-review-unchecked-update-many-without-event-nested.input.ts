import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewCreateWithoutEventInput } from './love-event-review-create-without-event.input'
import { Type } from 'class-transformer'
import { LoveEventReviewCreateOrConnectWithoutEventInput } from './love-event-review-create-or-connect-without-event.input'
import { LoveEventReviewUpsertWithWhereUniqueWithoutEventInput } from './love-event-review-upsert-with-where-unique-without-event.input'
import { LoveEventReviewCreateManyEventInputEnvelope } from './love-event-review-create-many-event-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'
import { LoveEventReviewUpdateWithWhereUniqueWithoutEventInput } from './love-event-review-update-with-where-unique-without-event.input'
import { LoveEventReviewUpdateManyWithWhereWithoutEventInput } from './love-event-review-update-many-with-where-without-event.input'
import { LoveEventReviewScalarWhereInput } from './love-event-review-scalar-where.input'

@InputType()
export class LoveEventReviewUncheckedUpdateManyWithoutEventNestedInput {
  @Field(() => [LoveEventReviewCreateWithoutEventInput], { nullable: true })
  @Type(() => LoveEventReviewCreateWithoutEventInput)
  create?: Array<LoveEventReviewCreateWithoutEventInput>

  @Field(() => [LoveEventReviewCreateOrConnectWithoutEventInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewCreateOrConnectWithoutEventInput)
  connectOrCreate?: Array<LoveEventReviewCreateOrConnectWithoutEventInput>

  @Field(() => [LoveEventReviewUpsertWithWhereUniqueWithoutEventInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewUpsertWithWhereUniqueWithoutEventInput)
  upsert?: Array<LoveEventReviewUpsertWithWhereUniqueWithoutEventInput>

  @Field(() => LoveEventReviewCreateManyEventInputEnvelope, { nullable: true })
  @Type(() => LoveEventReviewCreateManyEventInputEnvelope)
  createMany?: LoveEventReviewCreateManyEventInputEnvelope

  @Field(() => [LoveEventReviewWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventReviewWhereUniqueInput)
  set?: Array<Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>>

  @Field(() => [LoveEventReviewWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventReviewWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>>

  @Field(() => [LoveEventReviewWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventReviewWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>>

  @Field(() => [LoveEventReviewWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>>

  @Field(() => [LoveEventReviewUpdateWithWhereUniqueWithoutEventInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewUpdateWithWhereUniqueWithoutEventInput)
  update?: Array<LoveEventReviewUpdateWithWhereUniqueWithoutEventInput>

  @Field(() => [LoveEventReviewUpdateManyWithWhereWithoutEventInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewUpdateManyWithWhereWithoutEventInput)
  updateMany?: Array<LoveEventReviewUpdateManyWithWhereWithoutEventInput>

  @Field(() => [LoveEventReviewScalarWhereInput], { nullable: true })
  @Type(() => LoveEventReviewScalarWhereInput)
  deleteMany?: Array<LoveEventReviewScalarWhereInput>
}
