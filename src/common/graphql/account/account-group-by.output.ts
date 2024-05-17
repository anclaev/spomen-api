import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Sex } from '../prisma/sex.enum';
import { AccountCountAggregate } from './account-count-aggregate.output';
import { AccountMinAggregate } from './account-min-aggregate.output';
import { AccountMaxAggregate } from './account-max-aggregate.output';

@ObjectType()
export class AccountGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    login!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    vk_id?: string;

    @Field(() => String, {nullable:true})
    vk_pic?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    surname?: string;

    @Field(() => Sex, {nullable:true})
    sex?: keyof typeof Sex;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AccountCountAggregate, {nullable:true})
    _count?: AccountCountAggregate;

    @Field(() => AccountMinAggregate, {nullable:true})
    _min?: AccountMinAggregate;

    @Field(() => AccountMaxAggregate, {nullable:true})
    _max?: AccountMaxAggregate;
}
