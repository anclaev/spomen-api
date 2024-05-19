import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateWithoutAuthorInput } from './review-create-without-author.input'
import { Type } from 'class-transformer'
import { ReviewCreateOrConnectWithoutAuthorInput } from './review-create-or-connect-without-author.input'
import { ReviewUpsertWithWhereUniqueWithoutAuthorInput } from './review-upsert-with-where-unique-without-author.input'
import { ReviewCreateManyAuthorInputEnvelope } from './review-create-many-author-input-envelope.input'
import { Prisma } from '@prisma/client'
import { ReviewWhereUniqueInput } from './review-where-unique.input'
import { ReviewUpdateWithWhereUniqueWithoutAuthorInput } from './review-update-with-where-unique-without-author.input'
import { ReviewUpdateManyWithWhereWithoutAuthorInput } from './review-update-many-with-where-without-author.input'
import { ReviewScalarWhereInput } from './review-scalar-where.input'

@InputType()
export class ReviewUpdateManyWithoutAuthorNestedInput {
  @Field(() => [ReviewCreateWithoutAuthorInput], { nullable: true })
  @Type(() => ReviewCreateWithoutAuthorInput)
  create?: Array<ReviewCreateWithoutAuthorInput>

  @Field(() => [ReviewCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutAuthorInput>

  @Field(() => [ReviewUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => ReviewUpsertWithWhereUniqueWithoutAuthorInput)
  upsert?: Array<ReviewUpsertWithWhereUniqueWithoutAuthorInput>

  @Field(() => ReviewCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyAuthorInputEnvelope)
  createMany?: ReviewCreateManyAuthorInputEnvelope

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

  @Field(() => [ReviewUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateWithWhereUniqueWithoutAuthorInput)
  update?: Array<ReviewUpdateWithWhereUniqueWithoutAuthorInput>

  @Field(() => [ReviewUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => ReviewUpdateManyWithWhereWithoutAuthorInput)
  updateMany?: Array<ReviewUpdateManyWithWhereWithoutAuthorInput>

  @Field(() => [ReviewScalarWhereInput], { nullable: true })
  @Type(() => ReviewScalarWhereInput)
  deleteMany?: Array<ReviewScalarWhereInput>
}
