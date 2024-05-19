import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventReviewCreateWithoutAuthorInput } from './love-event-review-create-without-author.input'
import { Type } from 'class-transformer'
import { LoveEventReviewCreateOrConnectWithoutAuthorInput } from './love-event-review-create-or-connect-without-author.input'
import { LoveEventReviewCreateManyAuthorInputEnvelope } from './love-event-review-create-many-author-input-envelope.input'
import { Prisma } from '@prisma/client'
import { LoveEventReviewWhereUniqueInput } from './love-event-review-where-unique.input'

@InputType()
export class LoveEventReviewUncheckedCreateNestedManyWithoutAuthorInput {
  @Field(() => [LoveEventReviewCreateWithoutAuthorInput], { nullable: true })
  @Type(() => LoveEventReviewCreateWithoutAuthorInput)
  create?: Array<LoveEventReviewCreateWithoutAuthorInput>

  @Field(() => [LoveEventReviewCreateOrConnectWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => LoveEventReviewCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<LoveEventReviewCreateOrConnectWithoutAuthorInput>

  @Field(() => LoveEventReviewCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => LoveEventReviewCreateManyAuthorInputEnvelope)
  createMany?: LoveEventReviewCreateManyAuthorInputEnvelope

  @Field(() => [LoveEventReviewWhereUniqueInput], { nullable: true })
  @Type(() => LoveEventReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<LoveEventReviewWhereUniqueInput, 'id'>>
}
