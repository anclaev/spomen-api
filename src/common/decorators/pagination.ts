import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common'

import { Request } from 'express'

import { Pagination } from '@interfaces/pagination'

export const UsePagination = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): Pagination => {
    const req: Request = ctx.switchToHttp().getRequest()
    const page = parseInt(req.query.page as string)
    const size = parseInt(req.query.size as string)

    // check if page and size are valid
    if (isNaN(page) || page < 0 || isNaN(size) || size < 0) {
      throw new BadRequestException('Некорректные параметры пагинации')
    }
    // do not allow to fetch large slices of the dataset
    if (size > 100) {
      throw new BadRequestException('Превышен размер страницы')
    }

    // calculate pagination parameters
    // const limit = size
    // const offset = page * limit
    return { page, size }
  },
)
