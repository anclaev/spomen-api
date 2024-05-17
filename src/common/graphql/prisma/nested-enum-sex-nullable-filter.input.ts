import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Sex } from './sex.enum';

@InputType()
export class NestedEnumSexNullableFilter {

    @Field(() => Sex, {nullable:true})
    equals?: keyof typeof Sex;

    @Field(() => [Sex], {nullable:true})
    in?: Array<keyof typeof Sex>;

    @Field(() => [Sex], {nullable:true})
    notIn?: Array<keyof typeof Sex>;

    @Field(() => NestedEnumSexNullableFilter, {nullable:true})
    not?: NestedEnumSexNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
