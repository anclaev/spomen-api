import { PrismaService } from 'nestjs-prisma'
import { BadRequestException, Injectable } from '@nestjs/common'

import { Account } from '@prisma/client'

import { FindUniqueAccountArgs } from '@graphql/account/find-unique-account.args'
import { CreateOneAccountArgs } from '@graphql/account/create-one-account.args'
import { UpdateOneAccountArgs } from '@graphql/account/update-one-account.args'
import { FindManyAccountArgs } from '@graphql/account/find-many-account.args'

@Injectable()
export class AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(args: CreateOneAccountArgs): Promise<Account | null> {
    const alreadyExist = await this.findOne({
      where: { login: args.data.login },
    })

    if (alreadyExist) return null

    return await this.prisma.account.create(args)
  }

  async update(args: UpdateOneAccountArgs): Promise<Account | null> {
    return await this.prisma.account.update(args)
  }

  async findOne(args: FindUniqueAccountArgs): Promise<Account | null> {
    return await this.prisma.account.findUnique(args)
  }

  async findMany(args: FindManyAccountArgs): Promise<Account[]> {
    return await this.prisma.account.findMany(args)
  }
}
