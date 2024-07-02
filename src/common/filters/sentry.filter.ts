import { ExternalExceptionFilter } from '@nestjs/core/exceptions/external-exception-filter'
import { ArgumentsHost, Catch } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { GqlContextType } from 'nestjs-prisma'

@Catch()
export class SentryFilter extends BaseExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    if (host.getType<GqlContextType>() === 'graphql') {
      new ExternalExceptionFilter().catch(exception, host)
    } else {
      super.catch(exception, host)
    }
  }
}
