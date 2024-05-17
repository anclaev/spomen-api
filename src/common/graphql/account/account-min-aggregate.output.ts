import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Sex } from '../prisma/sex.enum';

@ObjectType()
export class AccountMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    login?: string;

    @Field(() => String, {nullable:true})
    password?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
