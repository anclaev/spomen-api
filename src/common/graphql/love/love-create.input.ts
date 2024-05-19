import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateNestedManyWithoutLoveInput } from '../account/account-create-nested-many-without-love.input'
import { LoveEventCreateNestedManyWithoutLoveInput } from '../love-event/love-event-create-nested-many-without-love.input'

@InputType()
export class LoveCreateInput {
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

  @Field(() => LoveEventCreateNestedManyWithoutLoveInput, { nullable: true })
  events?: LoveEventCreateNestedManyWithoutLoveInput
}
