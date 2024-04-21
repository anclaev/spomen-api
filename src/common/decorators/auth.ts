import { UseGuards } from '@nestjs/common'

import { JwtGraphQLGuard } from '@/auth/guards/jwt-graphql.guard'
import JwtGuard from '@/auth/guards/jwt.guard'

export const UseGQLAuth = () => UseGuards(JwtGraphQLGuard)
export const UseAuth = () => UseGuards(JwtGuard)
