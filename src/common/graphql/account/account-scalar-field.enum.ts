import { registerEnumType } from '@nestjs/graphql';

export enum AccountScalarFieldEnum {
    id = "id",
    login = "login",
    password = "password",
    email = "email",
    vk_id = "vk_id",
    vk_pic = "vk_pic",
    name = "name",
    surname = "surname",
    sex = "sex",
    birthday = "birthday",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AccountScalarFieldEnum, { name: 'AccountScalarFieldEnum', description: undefined })
