import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Sex } from '../prisma/sex.enum';

@ObjectType()
export class Account {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    login!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    vk_id!: string | null;

    @Field(() => String, {nullable:true})
    vk_pic!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    surname!: string | null;

    @Field(() => Sex, {nullable:true})
    sex!: keyof typeof Sex | null;

    @Field(() => Date, {nullable:true})
    birthday!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
