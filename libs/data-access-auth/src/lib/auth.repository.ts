// import { Prisma, PrismaAuthClientService } from '@api/prisma-auth-client'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthRepository {
  // constructor(private readonly prisma: PrismaAuthClientService) {}
  // async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
  // return this.prisma.user.findUnique({
  // where: userWhereUniqueInput,
  // })
  // }
  //   async users(options: {
  //     skip?: number;
  //     take?: number;
  //     cursor?: Prisma.UserWhereUniqueInput;
  //     where?: Prisma.UserWhereInput;
  //     orderBy?: Prisma.UserOrderByWithRelationInput;
  //   }) {
  //     const { skip, take, cursor, where, orderBy } = options;
  //     return this.prisma.user.findMany({
  //       skip,
  //       take,
  //       cursor,
  //       where,
  //       orderBy,
  //     });
  //   }
  //   async createUser(data: Prisma.UserCreateInput) {
  //     return this.prisma.user.create({
  //       data,
  //     });
  //   }
  //   async updateUser(options: {
  //     where: Prisma.UserWhereUniqueInput;
  //     data: Prisma.UserUpdateInput;
  //   }) {
  //     const { where, data } = options;
  //     return this.prisma.user.update({
  //       data,
  //       where,
  //     });
  //   }
  //   async deleteUser(where: Prisma.UserWhereUniqueInput) {
  //     return this.prisma.user.delete({
  //       where,
  //     });
  //   }
}
