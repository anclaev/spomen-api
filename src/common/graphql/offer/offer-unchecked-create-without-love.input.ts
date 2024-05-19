import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class OfferUncheckedCreateWithoutLoveInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  code!: string

  @Field(() => String, { nullable: false })
  ownerId!: string

  @Field(() => String, { nullable: false })
  targetId!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
