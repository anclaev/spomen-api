import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import { OfferWhereUniqueInput } from './offer-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class FindUniqueOfferOrThrowArgs {
  @Field(() => OfferWhereUniqueInput, { nullable: false })
  @Type(() => OfferWhereUniqueInput)
  where!: Prisma.AtLeast<OfferWhereUniqueInput, 'id'>
}
