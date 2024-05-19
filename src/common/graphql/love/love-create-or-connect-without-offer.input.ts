import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'
import { Type } from 'class-transformer'
import { LoveCreateWithoutOfferInput } from './love-create-without-offer.input'

@InputType()
export class LoveCreateOrConnectWithoutOfferInput {
  @Field(() => LoveWhereUniqueInput, { nullable: false })
  @Type(() => LoveWhereUniqueInput)
  where!: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>

  @Field(() => LoveCreateWithoutOfferInput, { nullable: false })
  @Type(() => LoveCreateWithoutOfferInput)
  create!: LoveCreateWithoutOfferInput
}
