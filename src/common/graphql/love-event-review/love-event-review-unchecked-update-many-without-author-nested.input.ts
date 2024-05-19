import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewCreateWithoutAuthorInput } from './love-event-review-create-without-author.input'
import { Type } from 'class-transformer'
import { LoveEventReviewCreateOrConnectWithoutAuthorInput } from './love-event-review-create-or-connect-without-author.input'
import { LoveEventReviewUpsertWithWhereUniqueWithoutAuthorInput } from './love-event-review-upsert-with-where-unique-without-author.input'
import { LoveEventReviewCreateManyAuthorInputEnvelope } from './love-event-review-create-many-author-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'
import { LoveEventReviewUpdateWithWhereUniqueWithoutAuthorInput } from './love-event-review-update-with-where-unique-without-author.input'
import { LoveEventReviewUpdateManyWithWhereWithoutAuthorInput } from './love-event-review-update-many-with-where-without-author.input'
import { LoveEventReviewScalarWhereInput } from './love-event-review-scalar-where.input'

@InputType()
export class LoveEventReviewUncheckedUpdateManyWithoutAuthorNestedInput {
  @Field(() => [LoveEventReviewCreateWithoutAuthorInput], { nullable: true })
  @Type(() => LoveEventReviewCreateWithoutAuthorInput)
  create?: Array<LoveEventReviewCreateWithoutAuthorInput>

  @Field(() => [LoveEventReviewCreateOrConnectWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<LoveEventReviewCreateOrConnectWithoutAuthorInput>

  @Field(() => [LoveEventReviewUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewUpsertWithWhereUniqueWithoutAuthorInput)
  upsert?: Array<LoveEventReviewUpsertWithWhereUniqueWithoutAuthorInput>

  @Field(() => LoveEventReviewCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => LoveEventReviewCreateManyAuthorInputEnvelope)
  createMany?: LoveEventReviewCreateManyAuthorInputEnvelope

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

  @Field(() => [LoveEventReviewUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewUpdateWithWhereUniqueWithoutAuthorInput)
  update?: Array<LoveEventReviewUpdateWithWhereUniqueWithoutAuthorInput>

  @Field(() => [LoveEventReviewUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewUpdateManyWithWhereWithoutAuthorInput)
  updateMany?: Array<LoveEventReviewUpdateManyWithWhereWithoutAuthorInput>

  @Field(() => [LoveEventReviewScalarWhereInput], { nullable: true })
  @Type(() => LoveEventReviewScalarWhereInput)
  deleteMany?: Array<LoveEventReviewScalarWhereInput>
}
