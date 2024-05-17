import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Sex } from './sex.enum';
import { NestedEnumSexNullableWithAggregatesFilter } from './nested-enum-sex-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumSexNullableFilter } from './nested-enum-sex-nullable-filter.input';

@InputType()
export class EnumSexNullableWithAggregatesFilter {

    @Field(() => Sex, {nullable:true})
    equals?: keyof typeof Sex;

    @Field(() => [Sex], {nullable:true})
    in?: Array<keyof typeof Sex>;

    @Field(() => [Sex], {nullable:true})
    notIn?: Array<keyof typeof Sex>;

    @Field(() => NestedEnumSexNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumSexNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumSexNullableFilter, {nullable:true})
    _min?: NestedEnumSexNullableFilter;

    @Field(() => NestedEnumSexNullableFilter, {nullable:true})
    _max?: NestedEnumSexNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
