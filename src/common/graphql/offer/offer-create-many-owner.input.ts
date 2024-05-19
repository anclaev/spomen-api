import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class OfferCreateManyOwnerInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  code!: string

  @Field(() => String, { nullable: false })
  loveId!: string

  @Field(() => String, { nullable: false })
  targetId!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
