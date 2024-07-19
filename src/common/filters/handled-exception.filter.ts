import {
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Catch,
} from '@nestjs/common'

import { GqlArgumentsHost, GqlContextType } from '@nestjs/graphql'
import { Request, Response } from 'express'
import { GraphQLError } from 'graphql'

import { ERRORS } from '@enums/errors'

@Catch(HttpException)
export class HandledExceptionFilter implements ExceptionFilter {
  catch(exc: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const req = ctx.getRequest<Request>()
    const res = ctx.getResponse<Response>()
    const status = exc.getStatus()

    let message: string | null = null

    switch (status) {
      case HttpStatus.BAD_REQUEST: {
        message = ERRORS.BAD_REQUEST
        break
      }

      case HttpStatus.UNAUTHORIZED: {
        message = ERRORS.UNAUTHORIZED
        break
      }

      case HttpStatus.FORBIDDEN: {
        message = ERRORS.FORBIDDEN
        break
      }

      case HttpStatus.NOT_FOUND: {
        message = ERRORS.NOT_FOUND
        break
      }

      case HttpStatus.CONFLICT: {
        message = ERRORS.CONFLICT
        break
      }

      case HttpStatus.INTERNAL_SERVER_ERROR: {
        message = ERRORS.INTERNAL_SERVER
        break
      }

      default: {
        message = exc.message.trim().length > 0 ? exc.message : ERRORS.DEFAULT
        break
      }
    }

    if (host.getType<GqlContextType>() === 'graphql') {
      const gqlHost = GqlArgumentsHost.create(host)

      return new GraphQLError(message, {
        extensions: {
          code: status,
          description: exc.message.trim().length > 0 ? exc.message : null,
        },
      })
    }

    res.status(status).json({
      path: req.url,
      status,
      message,
      description: exc.message.trim().length > 0 ? exc.message : null,
      cause: exc.cause,
    })
  }
}
