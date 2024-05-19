import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveUpdateWithoutOfferInput } from './love-update-without-offer.input'
import { Type } from 'class-transformer'
import { LoveCreateWithoutOfferInput } from './love-create-without-offer.input'
import { LoveWhereInput } from './love-where.input'

@InputType()
export class LoveUpsertWithoutOfferInput {
  @Field(() => LoveUpdateWithoutOfferInput, { nullable: false })
  @Type(() => LoveUpdateWithoutOfferInput)
  update!: LoveUpdateWithoutOfferInput

  @Field(() => LoveCreateWithoutOfferInput, { nullable: false })
  @Type(() => LoveCreateWithoutOfferInput)
  create!: LoveCreateWithoutOfferInput

  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput
}
