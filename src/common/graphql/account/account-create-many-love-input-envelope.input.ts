import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateManyLoveInput } from './account-create-many-love.input'
import { Type } from 'class-transformer'

@InputType()
export class AccountCreateManyLoveInputEnvelope {
  @Field(() => [AccountCreateManyLoveInput], { nullable: false })
  @Type(() => AccountCreateManyLoveInput)
  data!: Array<AccountCreateManyLoveInput>
}
