import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventCreateWithoutReviewsInput } from './love-event-create-without-reviews.input'
import { Type } from 'class-transformer'
import { LoveEventCreateOrConnectWithoutReviewsInput } from './love-event-create-or-connect-without-reviews.input'
import { LoveEventUpsertWithoutReviewsInput } from './love-event-upsert-without-reviews.input'
import { Prisma } from '@prisma/client'
import { LoveEventWhereUniqueInput } from './love-event-where-unique.input'
import { LoveEventUpdateToOneWithWhereWithoutReviewsInput } from './love-event-update-to-one-with-where-without-reviews.input'

@InputType()
export class LoveEventUpdateOneRequiredWithoutReviewsNestedInput {
  @Field(() => LoveEventCreateWithoutReviewsInput, { nullable: true })
  @Type(() => LoveEventCreateWithoutReviewsInput)
  create?: LoveEventCreateWithoutReviewsInput

  @Field(() => LoveEventCreateOrConnectWithoutReviewsInput, { nullable: true })
  @Type(() => LoveEventCreateOrConnectWithoutReviewsInput)
  connectOrCreate?: LoveEventCreateOrConnectWithoutReviewsInput

  @Field(() => LoveEventUpsertWithoutReviewsInput, { nullable: true })
  @Type(() => LoveEventUpsertWithoutReviewsInput)
  upsert?: LoveEventUpsertWithoutReviewsInput

  @Field(() => LoveEventWhereUniqueInput, { nullable: true })
  @Type(() => LoveEventWhereUniqueInput)
  connect?: Prisma.AtLeast<LoveEventWhereUniqueInput, 'id'>

  @Field(() => LoveEventUpdateToOneWithWhereWithoutReviewsInput, {
    nullable: true,
  })
  @Type(() => LoveEventUpdateToOneWithWhereWithoutReviewsInput)
  update?: LoveEventUpdateToOneWithWhereWithoutReviewsInput
}
