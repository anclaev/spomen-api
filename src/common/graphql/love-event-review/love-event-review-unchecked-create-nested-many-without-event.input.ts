import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewCreateWithoutEventInput } from './love-event-review-create-without-event.input'
import { Type } from 'class-transformer'
import { LoveEventReviewCreateOrConnectWithoutEventInput } from './love-event-review-create-or-connect-without-event.input'
import { LoveEventReviewCreateManyEventInputEnvelope } from './love-event-review-create-many-event-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'

@InputType()
export class LoveEventReviewUncheckedCreateNestedManyWithoutEventInput {
  @Field(() => [LoveEventReviewCreateWithoutEventInput], { nullable: true })
  @Type(() => LoveEventReviewCreateWithoutEventInput)
  create?: Array<LoveEventReviewCreateWithoutEventInput>

  @Field(() => [LoveEventReviewCreateOrConnectWithoutEventInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewCreateOrConnectWithoutEventInput)
  connectOrCreate?: Array<LoveEventReviewCreateOrConnectWithoutEventInput>

  @Field(() => LoveEventReviewCreateManyEventInputEnvelope, { nullable: true })
  @Type(() => LoveEventReviewCreateManyEventInputEnvelope)
  createMany?: LoveEventReviewCreateManyEventInputEnvelope

  @Field(() => [LoveEventReviewWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>>
}
