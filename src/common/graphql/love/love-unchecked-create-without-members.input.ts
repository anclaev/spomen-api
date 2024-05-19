import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { LoveEventUncheckedCreateNestedManyWithoutLoveInput } from '../love-event/love-event-unchecked-create-nested-many-without-love.input'

@InputType()
export class LoveUncheckedCreateWithoutMembersInput {
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

  @Field(() => LoveEventUncheckedCreateNestedManyWithoutLoveInput, {
    nullable: true,
  })
  events?: LoveEventUncheckedCreateNestedManyWithoutLoveInput
}
