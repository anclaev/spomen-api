import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Sex } from './sex.enum';
import { NestedEnumSexNullableFilter } from './nested-enum-sex-nullable-filter.input';

@InputType()
export class EnumSexNullableFilter {

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
