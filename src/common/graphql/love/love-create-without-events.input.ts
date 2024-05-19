import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateNestedManyWithoutLoveInput } from '../account/account-create-nested-many-without-love.input'

@InputType()
export class LoveCreateWithoutEventsInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  alias!: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => Boolean, { nullable: false })
  private!: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => AccountCreateNestedManyWithoutLoveInput, { nullable: true })
  members?: AccountCreateNestedManyWithoutLoveInput
}
