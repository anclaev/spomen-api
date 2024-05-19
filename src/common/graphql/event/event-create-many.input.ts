import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class EventCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => Date, { nullable: true })
  date?: Date | string

  @Field(() => String, { nullable: false })
  picId!: string

  @Field(() => String, { nullable: false })
  loveId!: string

  @Field(() => String, { nullable: false })
  ownerId!: string

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
