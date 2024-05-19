import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ReviewCreateWithoutAuthorInput } from './review-create-without-author.input'
import { Type } from 'class-transformer'
import { ReviewCreateOrConnectWithoutAuthorInput } from './review-create-or-connect-without-author.input'
import { ReviewCreateManyAuthorInputEnvelope } from './review-create-many-author-input-envelope.input'
import { Prisma } from '@prisma/client'
import { ReviewWhereUniqueInput } from './review-where-unique.input'

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutAuthorInput {
  @Field(() => [ReviewCreateWithoutAuthorInput], { nullable: true })
  @Type(() => ReviewCreateWithoutAuthorInput)
  create?: Array<ReviewCreateWithoutAuthorInput>

  @Field(() => [ReviewCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => ReviewCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<ReviewCreateOrConnectWithoutAuthorInput>

  @Field(() => ReviewCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => ReviewCreateManyAuthorInputEnvelope)
  createMany?: ReviewCreateManyAuthorInputEnvelope

  @Field(() => [ReviewWhereUniqueInput], { nullable: true })
  @Type(() => ReviewWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>
}
