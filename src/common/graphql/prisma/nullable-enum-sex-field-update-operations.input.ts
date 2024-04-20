import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Sex } from './sex.enum';

@InputType()
export class NullableEnumSexFieldUpdateOperationsInput {

    @Field(() => Sex, {nullable:true})
    set?: keyof typeof Sex;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
