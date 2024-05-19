import { registerEnumType } from '@nestjs/graphql'

export enum Role {
  Public = 'Public',
  Lover = 'Lover',
  Admin = 'Admin',
}

registerEnumType(Role, { name: 'Role', description: undefined })
