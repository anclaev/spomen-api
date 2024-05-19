import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveCreateWithoutOfferInput } from './love-create-without-offer.input'
import { Type } from 'class-transformer'
import { LoveCreateOrConnectWithoutOfferInput } from './love-create-or-connect-without-offer.input'
import { LoveUpsertWithoutOfferInput } from './love-upsert-without-offer.input'
import { Prisma } from '@prisma/client'
import { LoveWhereUniqueInput } from './love-where-unique.input'
import { LoveUpdateToOneWithWhereWithoutOfferInput } from './love-update-to-one-with-where-without-offer.input'

@InputType()
export class LoveUpdateOneRequiredWithoutOfferNestedInput {
  @Field(() => LoveCreateWithoutOfferInput, { nullable: true })
  @Type(() => LoveCreateWithoutOfferInput)
  create?: LoveCreateWithoutOfferInput

  @Field(() => LoveCreateOrConnectWithoutOfferInput, { nullable: true })
  @Type(() => LoveCreateOrConnectWithoutOfferInput)
  connectOrCreate?: LoveCreateOrConnectWithoutOfferInput

  @Field(() => LoveUpsertWithoutOfferInput, { nullable: true })
  @Type(() => LoveUpsertWithoutOfferInput)
  upsert?: LoveUpsertWithoutOfferInput

  @Field(() => LoveWhereUniqueInput, { nullable: true })
  @Type(() => LoveWhereUniqueInput)
  connect?: Prisma.AtLeast<LoveWhereUniqueInput, 'id' | 'alias'>

  @Field(() => LoveUpdateToOneWithWhereWithoutOfferInput, { nullable: true })
  @Type(() => LoveUpdateToOneWithWhereWithoutOfferInput)
  update?: LoveUpdateToOneWithWhereWithoutOfferInput
}
