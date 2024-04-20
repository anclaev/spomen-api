import {
  utilities as nestWinstonModuleUtilities,
  WinstonModuleOptions,
} from 'nest-winston'

import * as winston from 'winston'

/**
 * Параметры логгера
 */
export const winstonOptions: WinstonModuleOptions = {
  exitOnError: true,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike('Spomen API', {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),
  ],
}
