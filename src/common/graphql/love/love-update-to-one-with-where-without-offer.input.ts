import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveWhereInput } from './love-where.input'
import { Type } from 'class-transformer'
import { LoveUpdateWithoutOfferInput } from './love-update-without-offer.input'

@InputType()
export class LoveUpdateToOneWithWhereWithoutOfferInput {
  @Field(() => LoveWhereInput, { nullable: true })
  @Type(() => LoveWhereInput)
  where?: LoveWhereInput

  @Field(() => LoveUpdateWithoutOfferInput, { nullable: false })
  @Type(() => LoveUpdateWithoutOfferInput)
  data!: LoveUpdateWithoutOfferInput
}
