import { registerEnumType } from '@nestjs/graphql'

export enum Access {
  Public = 'Public',
  Lovers = 'Lovers',
  Owner = 'Owner',
}

registerEnumType(Access, { name: 'Access', description: undefined })
