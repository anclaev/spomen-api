import { registerEnumType } from '@nestjs/graphql';

export enum Sex {
    Male = "Male",
    Female = "Female"
}


registerEnumType(Sex, { name: 'Sex', description: undefined })
